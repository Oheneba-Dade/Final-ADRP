from ADRP.models import DatasetFile
import boto3
from django.conf import settings
from botocore.exceptions import NoCredentialsError, PartialCredentialsError, BotoCoreError
from .helper import extract_filename
import logging

logger = logging.getLogger(__name__)
LINK_EXPIRY_TIME = 3600 * 48


### s3  interactions



def s3_client_connection():
    return boto3.client(
        "s3",
        aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
        aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
    )


def upload_file_to_bucket(file_obj, filename, dataset_id):
    """ Uploads files to bucket and return URL """
    try:
        s3_client = s3_client_connection()
        bucket_name = settings.AWS_STORAGE_BUCKET_NAME
        s3_client.upload_file_obj(file_obj, bucket_name, filename, ExtraArgs={"ACL": "public-read"}) # will allow anyone with the link to read the file
        # ExtraArgs={"ACL": "private"} Only the owner (AWS account that uploaded the file) can access it.

        return f"https://{bucket_name}.s3.amazonaws.com/{dataset_id}-{filename}"

    except FileNotFoundError:
        logger.error(f"File not found: {file_obj}")
    except (NoCredentialsError, PartialCredentialsError):
        logger.error("AWS credentials not found or misconfigured")
    except BotoCoreError as e:
        logger.error(f"An error occurred with Boto3: {e}")
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
    return None


def generate_file_url_from_bucket(filename):
    try:
        s3_client = s3_client_connection()
        return s3_client.generate_presigned_url(
            'get_object', 
            params={'Bucket':settings.AWS_STORAGE_BUCKET_NAME,'Key':filename}, 
            ExpiresIn=LINK_EXPIRY_TIME) 
    
    except Exception as e:
        logger.error(f"Unexpected error generated presigned URL: {e}")

    return None


def delete_file_from_bucket(filename):
    try:
        s3_client = s3_client_connection()
        return s3_client.delete_object(Bucket=settings.AWS_STORAGE_BUCKET_NAME,Key=filename,)
    
    except (NoCredentialsError, PartialCredentialsError):
        logger.error("AWS credentials not found or misconfigured")
    except BotoCoreError as e:
        logger.error(f"An error occurred with Boto3: {e}")
    except Exception as e:
        logger.error(f"Unexpected error: {e}")

def update_file_on_bucket(filename, file_obj):
    try:
        s3_client = s3_client_connection()
        return s3_client.put_object(
            Bucket=settings.AWS_STORAGE_BUCKET_NAME,
            Body=file_obj,
            Key=filename,
        )
    
    except (NoCredentialsError, PartialCredentialsError):
        logger.error("AWS credentials not found or misconfigured")
    except BotoCoreError as e:
        logger.error(f"An error occurred with Boto3: {e}")
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
    
    return None


# database interactions

def get_dataset_file(dataset_id, filename):
    """Get dataset file from the database"""
    return DatasetFile.objects.filter(dataset_id=dataset_id, filename=filename)


def save_dataset_file(dataset, file_url, file_type):
    """Saves a dataset file record in the database"""
    return DatasetFile.objects.create(
        dataset=dataset,
        filename=extract_filename(file_url),
        file_url=file_url,
        file_type=file_type
    )


def update_dataset_file(dataset, file_url, file_type):
    """Update dataset file in the database"""
    return DatasetFile.objects.filter(dataset=dataset).update(
        file_url=file_url,
        file_type=file_type
    )


def delete_dataset_file(dataset, filename):
    """Delete dataset file from the database"""
    return DatasetFile.objects.filter(dataset=dataset, file_url__endswith=filename).delete()[0]
