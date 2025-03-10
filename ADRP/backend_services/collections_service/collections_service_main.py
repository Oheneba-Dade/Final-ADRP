from urllib import request

from rest_framework import status
from rest_framework.response import Response

from .collections_service_repository import get_collection_by_id, create_collection
from rest_framework.exceptions import NotFound, ValidationError
from ...serializers import CollectionSerializer
from rest_framework.request import Request


class CollectionsService:
    """Service for managing collections on the ADRP"""

    @staticmethod
    def create_collection(request_obj: Request):
        #TODO Upload file needs to be integrated.

        serializer = CollectionSerializer(data=request_obj.data)

        if serializer.is_valid():
            new_collection = create_collection(request_obj.user,serializer.validated_data)
            return new_collection

        raise ValidationError(serializer.errors)



    @staticmethod
    def delete_collection(self):
        return

    @staticmethod
    def update_collection(self):
        return

    @staticmethod
    def get_all_collections(self):
        return

    @staticmethod
    def get_collection(request_obj : Request):
        collection_id = request_obj.query_params.get('collection_id')

        collection_data = get_collection_by_id(collection_id)
        serialized_data = CollectionSerializer(data=collection_data)

        if collection_data is None:
            raise NotFound('Collection not found')

        if serialized_data.is_valid():
            print(serialized_data.data)
            return serialized_data.data

        return
