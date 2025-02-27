from ADRP.models import DatasetFile
import boto3
from django.conf import settings
from botocore.exceptions import NoCredentialsError, PartialCredentialsError, BotoCoreError
from helper import extract_filename
import logging

logger = logging.getLogger(__name__)



### s3  interactions
def upload_file_to_bucket(file_obj, filename, dataset_id):
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

        file_url = f"https://{bucket_name}.s3.amazonaws.com/{dataset_id}-{filename}"
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

def delete_file_from_bucket(filename):
    bucket_name = settings.AWS_STORAGE_BUCKET_NAME
    try:
        s3_client = boto3.client(
            "s3",
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            bucket_name = settings.AWS_STORAGE_BUCKET_NAME,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
        )

        response = s3_client .delete_object(
            Bucket=f'{bucket_name}',
            Key=f'{filename}',
        
    )
    except NoCredentialsError:
        logger.error("AWS credentials not found or misconfigured.")
    except PartialCredentialsError:
        logger.error("Incomplete AWS credentials provided.")
    except BotoCoreError as e:
        logger.error(f"An error occurred with Boto3: {e}")
    except Exception as e:
        logger.error(f"Unexpected error: {e}")

def update_file_on_bucket(filename, file_obj):
    bucket_name = settings.AWS_STORAGE_BUCKET_NAME
    try:
        s3_client = boto3.client(
            "s3",
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            bucket_name = settings.AWS_STORAGE_BUCKET_NAME,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
        )

        response = s3_client .put_object(
            Bucket=f'{bucket_name}',
            Body=file_obj,
            Key=f'{filename}',
        
    )
    except NoCredentialsError:
        logger.error("AWS credentials not found or misconfigured.")
    except PartialCredentialsError:
        logger.error("Incomplete AWS credentials provided.")
    except BotoCoreError as e:
        logger.error(f"An error occurred with Boto3: {e}")
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        



#### database 
def get_dataset_file(dataset_id, filename):
    return  DatasetFile.objects.filter(dataset_id=dataset_id,filename=filename)

def save_dataset_file(dataset, file_url, file_type):
    return DatasetFile.objects.create(
        dataset=dataset,
        filename=extract_filename(file_url),
        file_url=file_url,
        file_type=file_type
    )

def update_dateset_file(dataset, file_url, file_type): #dataset, file_url, file_obj.content_type
    return DatasetFile.objects.filter(dataset=dataset).update(
        file_url=file_url,
        file_type=file_type
    )

def delete_dataset_file(dataset, filename):
    return DatasetFile.objects.filter(dataset=dataset, file_url__endswith=filename).delete()[0]
