from django.core.exceptions import ObjectDoesNotExist
from botocore.exceptions import NoCredentialsError, PartialCredentialsError, BotoCoreError
from dataset_file_service_repository import upload_file_to_s3, save_dataset_file
from collections_service.collections_service_repository import get_dataset
from ADRP.models import DatasetFile
from django.conf import settings
import boto3
import logging


logger = logging.getLogger(__name__)

MAX_FILE_SIZE_MB = 500  
MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024  


class dataset_file_services:

    def handle_file_upload(dataset_id, file_obj):
        """ takes files uploaded and creates the dataset file object"""

        if not dataset_id or not file_obj:
            return {"error": "Dataset ID and file are required.", "status": 400}

        try:
            dataset = get_dataset(dataset_id) 
        except ObjectDoesNotExist:
            return {"error": "Dataset not found.", "status": 404}

        if file_obj.size > MAX_FILE_SIZE_BYTES:
            return {"error": f"File size exceeds {MAX_FILE_SIZE_MB}MB limit.", "status": 400}

        file_url = upload_file_to_s3(file_obj, file_obj.name)
        dataset_file = save_dataset_file(dataset, file_url, file_obj.content_type)

        return {"message": "File uploaded successfully", "file_url": file_url, "status": 201}


    def upload_to_bucket(file_obj, filename):
        """ create client connection and uploads files to bucket """
        try:
            s3_client = boto3.client(
                "s3",
                aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
                aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
            )

            bucket_name = settings.AWS_STORAGE_BUCKET_NAME
            s3_client.upload_file_obj(file_obj, bucket_name, filename, ExtraArgs={"ACL": "public-read"}) # will allow anyone with the link to read the file
            # ExtraArgs={"ACL": "private"} Only the owner (AWS account that uploaded the file) can access it.

            file_url = f"https://{bucket_name}.s3.amazonaws.com/{filename}"
            return file_url

        except FileNotFoundError:
            logger.error(f"File not found: {file_obj}")
        except NoCredentialsError:
            logger.error("AWS credentials not found or misconfigured.")
        except PartialCredentialsError:
            logger.error("Incomplete AWS credentials provided.")
        except BotoCoreError as e:
            logger.error(f"An error occurred with Boto3: {e}")
        except Exception as e:
            logger.error(f"Unexpected error: {e}")

        return None
       

    def delete_file():
        pass



   