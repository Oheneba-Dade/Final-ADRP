from ADRP.models import DatasetFile
import boto3
from django.conf import settings


# interact with database so filters crate 

def get_dataset_file(dataset_id):
    return  DatasetFile.objects.filter(dataset_id=dataset_id)

def save_dataset_file(dataset, file_url, file_type):
    return DatasetFile.objects.create(
        dataset=dataset,
        file_url=file_url,
        file_type=file_type
    )

def update_dateset_file():
    pass


def delete_dataset_file(file_url):
    return DatasetFile.objects.filter(file_url=file_url).delete()


