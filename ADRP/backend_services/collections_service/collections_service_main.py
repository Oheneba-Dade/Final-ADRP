from urllib import request

from rest_framework import status
from rest_framework.response import Response

from .collections_service_repository import *
from rest_framework.exceptions import NotFound, ValidationError
from ...serializers import CollectionSerializer
from rest_framework.request import Request
from rest_framework.pagination import PageNumberPagination



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
    def delete_collection(request_obj: Request):
        return

    @staticmethod
    def update_collection(self):
        return

    @staticmethod
    def get_all_collections(request_obj: Request):
        """ Gets all collections. Returns a paginated response"""

        results = get_all_collections(request_obj, "approved")

        return results

    @staticmethod
    def get_collection(request_obj: Request):
        #TODO lock this down so that only admins can request restricted collections
        collection_id = request_obj.query_params.get('collection_id')

        collection_data = get_collection_by_id(collection_id)

        # increment views
        increment_collection_views(collection_data)

        # Return only approved columns
        serialized_data = CollectionSerializer(instance=collection_data)

        return serialized_data.data

    @staticmethod
    def change_collection_status(request_obj: Request):
        """ Change the status of a collection"""

        collection = get_collection_by_id(request_obj.data.get('id'))

        serializer = CollectionSerializer(instance=collection, data=request_obj.data, partial=True)

        if serializer.is_valid():
            collection.approval_status = serializer.validated_data['approval_status']
            collection.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



