from django.core.exceptions import ObjectDoesNotExist
from botocore.exceptions import NoCredentialsError, PartialCredentialsError, BotoCoreError
from .dataset_file_service_repository import *
from ..collections_service.collections_service_repository import get_collection_by_id
from ADRP.models import DatasetFile
from django.conf import settings
import boto3
import logging


logger = logging.getLogger(__name__)

MAX_FILE_SIZE_MB = 500  
MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024  


class DatasetFileService:

    def handle_file_upload(dataset_id, file_obj):
        """ takes files uploaded and creates the dataset file object"""

        if not dataset_id or not file_obj:
            return {"error": "Dataset ID and file are required.", "status": 400}

        try:
            dataset = get_collection_by_id(dataset_id) 
        except ObjectDoesNotExist:
            return {"error": "Dataset not found.", "status": 404}

        if file_obj.size > MAX_FILE_SIZE_BYTES:
            return {"error": f"File size exceeds {MAX_FILE_SIZE_MB}MB limit.", "status": 400}

        file_url = upload_file_to_bucket(file_obj, file_obj.name)
        dataset_file = save_dataset_file(dataset, file_url, file_obj.content_type)

        return {"message": "File uploaded successfully", "file_url": file_url, "status": 201}

    def handle_file_download(dataset_id, filename):

        if not dataset_id or not filename:
            return {"error": "Dataset ID and file are required.", "status": 400}

        try:
            dataset = get_collection_by_id(dataset_id)             
            dataset_file = get_dataset_file(dataset_id) 
        except ObjectDoesNotExist:
            return {"error": "Dataset not found.", "status": 404}
        
        try:
            file_url = generate_file_url_from_bucket(filename)
            return {"message": "File downloaded successfully", "file_url": file_url, "status": 200}
        
        except:
            return {"error": "An error occurred while downloading the file.", "status": 400}



        


    def handle_file_delete(dataset_id, filename):
        """ takes the dataset id and file name and deletes them from the bucket and db"""
        
        if not dataset_id or not filename:
            return {"error": "Dataset ID and filename are required.", "status": 400}
        
        try:
            dataset = get_collection_by_id(dataset_id) 
        except ObjectDoesNotExist:
            return {"error": "Dataset not found.", "status": 404}
        
        
        try:
            delete_file_from_bucket(filename)
            deleted_count = delete_dataset_file(dataset, filename)

            if deleted_count == 0:
                return {"error": "File not found in database.", "status": 404}

            return {"message": "File deleted successfully.", "status": 200}
        except Exception as e:
            logger.error(f"Error deleting file {filename}: {str(e)}")
            return {"error": "An error occurred while deleting the file.", "status": 500}

    def handle_file_update(dataset_id, file_obj):
        """ takes files uploaded and updates the dataset file object"""

        if not dataset_id or not file_obj:
            return {"error": "Dataset ID and file are required.", "status": 400}

        try:
            dataset = get_collection_by_id(dataset_id) 
        except ObjectDoesNotExist:
            return {"error": "Dataset not found.", "status": 404}

        if file_obj.size > MAX_FILE_SIZE_BYTES:
            return {"error": f"File size exceeds {MAX_FILE_SIZE_MB}MB limit.", "status": 400}

        file_url = update_file_on_bucket(file_obj.name, file_obj)
        dataset_file = update_dataset_file(dataset, file_url, file_obj.content_type)

        return {"message": "File uploaded successfully", "file_url": file_url, "status": 201}

   