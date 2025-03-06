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

        serializer = CollectionSerializer(data=request_obj.data)

        if serializer.is_valid():
            new_collection = create_collection(serializer.validated_data)
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
    def get_collection(request_obj : Request.query_params):
        collection_id = request_obj.get('collection_id')
        print("Query Params:", request_obj)

        collection_data = get_collection_by_id(collection_id)

        if collection_data is None:
            raise NotFound('Collection not found')

        return collection_data
