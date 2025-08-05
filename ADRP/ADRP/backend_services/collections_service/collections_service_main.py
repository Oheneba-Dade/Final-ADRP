import traceback

from rest_framework import status
from rest_framework.exceptions import ValidationError, PermissionDenied, NotAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response

from .collections_service_repository import *
from ...serializers import CollectionSerializer
from ..dataset_service.dataset_service_main import DatasetService
from ..email_service.email_service_main import EmailService
from django.db import transaction

class CollectionsService:
    """Service for managing collections on the ADRP"""

    @staticmethod
    def create_collection(request_obj: Request):
        """ Creates a new collection"""

        serializer = CollectionSerializer(data=request_obj.data, context={'request': request_obj})

        if serializer.is_valid():
            new_collection = serializer.save()
            save_authors(request_obj, new_collection)
            print(serializer.data.get('keywords'))

            return serializer.data.get('id')

        raise ValidationError(serializer.errors)
    
    @staticmethod
    def upload_collection(request_obj: Request):
        """ uploads collection then dataset if one fails delete prevent any from entring database"""
        # print('here')
        dataset_fileobj = request_obj.data.get("dataset_file")
        if not dataset_fileobj:
            # print('here 2')
            return {"error": "No file uploaded.", 'status':400}
        # print('here 3')
        serializer = CollectionSerializer(data=request_obj.data, context={'request': request_obj})
        if serializer.is_valid():
            try:
               with transaction.atomic():
                    try:
                        new_collection = serializer.save()
                    except Exception as inner:
                        # print('error saving', inner)
                        raise

                    save_authors(request_obj, new_collection)
                    print("authors notified")

                    collection_id = new_collection.id
                    user = get_collection_by_id(collection_id).uploaded_by
                    result = DatasetService.handle_dataset_upload(collection_id, dataset_fileobj)
                    CollectionsService.inform_contributor_of_collection_status("NEW_SUBMISSION", user)

                    if result.get("status") != 201:
                        raise Exception("Dataset upload failed")

                    return {"message": "Collection and dataset uploaded successfully.",
                            "collection": CollectionSerializer(new_collection, context={'request': request_obj}).data,
                            "status":status.HTTP_201_CREATED}


            except Exception as e:
                print(e)
                traceback.print_exc()
                return {"error": str(e), "status":status.HTTP_500_INTERNAL_SERVER_ERROR}

        return serializer.errors
    @staticmethod
    def delete_collection(request_obj: Request):
        """Delete a collection by the ID"""

        delete_collection(request_obj)
        return

    @staticmethod
    def update_collection(self):
        return

    @staticmethod
    def get_all_collections(request_obj: Request):
        """ Gets all collections. Returns a paginated response"""
        # TODO Clean this up

        if request_obj.user.is_authenticated and request_obj.user.role == 'admin':
            collection_status = request_obj.query_params.get('status')
            collection_status = CollectionSerializer.validate_status(collection_status)
            results = get_all_collections(request_obj, collection_status, True)
        else:
            results = get_all_collections(request_obj, "approved")

        return results

    @staticmethod
    def get_collection(request_obj: Request):
        """Gets a collection by the ID if user has sufficient permissions"""
        #TODO this can be improved

        collection_id = request_obj.query_params.get('collection_id')
        try:
            collection_data = get_collection_by_id(collection_id)
        except Exception as e:
            raise e

        serialized_data = CollectionSerializer(instance=collection_data)

        if request_obj.user.is_authenticated and request_obj.user.role == 'admin':
            increment_collection_views(collection_data)
            return serialized_data.data
        else:
            if collection_data.approval_status != 'approved':
                raise PermissionDenied("You do not have permission to view this collection.")

        increment_collection_views(collection_data)

        return serialized_data.data

    @staticmethod
    def inform_contributor_of_collection_status(status,user):
        email_service = EmailService(recipients=[user.email],
                                     purpose=status,
                                     context={})
        email_service.send()



    @staticmethod
    def change_collection_status(request_obj: Request):
        """ Change the status of a collection"""

        try:
            collection = get_collection_by_id(request_obj.data.get('id'))

            # Get the current logged-in user
            admin_user = request_obj.user  
            # print(admin_user)
        
            if admin_user.role != "admin":  
                return {'error': 'Only admin users can change collection status',
                        "status":status.HTTP_403_FORBIDDEN}
            
            serializer = CollectionSerializer(instance=collection, data=request_obj.data, partial=True)
            user = collection.uploaded_by
            if serializer.is_valid():
                approval_status = serializer.validated_data['approval_status']

                if approval_status == "approved":
                    collection.approve(admin_user=admin_user)

                    # move file from waiting approval to approved
                    dataset_file = collection.files.first()
                    if not dataset_file:
                        return {"error": "No dataset file found for this collection", "status": 404}
                    DatasetService.handle_dataset_move(collection_id=collection.id, filename=dataset_file.file_name)
                    CollectionsService.inform_contributor_of_collection_status("APPROVE_SUBMISSION", user)

                elif approval_status == 'rejected':
                    collection.reject(admin_user=admin_user)
                    CollectionsService.inform_contributor_of_collection_status("REJECT_SUBMISSION", user)
                else:
                    collection.approval_status = serializer.validated_data['approval_status']
                    collection.save()
                    CollectionsService.inform_contributor_of_collection_status("PENDING_SUBMISSION", user)

                # print('updated collection',collection)
                return serializer.data

            return {'error': serializer.errors, "status":status.HTTP_400_BAD_REQUEST}
        except Exception as e:
            return {'error': str(e), "status":status.HTTP_400_BAD_REQUEST}
