from django.http import JsonResponse, HttpRequest, HttpResponse
from rest_framework.decorators import api_view

# from ...backend_services.orders_service.order_service_main import OrderService
# from ...models import
from rest_framework.decorators import api_view, permission_classes
import traceback
from rest_framework.response import Response
from rest_framework import status
from rest_framework.request import Request
from django.db import transaction
from ...backend_services.collections_service.collections_service_main import CollectionsService
from ..error_handling import handle_exceptions
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.permissions import AllowAny

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_collections(request: Request) -> HttpResponse:
    """ Get all collections, paginated view"""

    collections = CollectionsService.get_all_collections(request)
    return collections


@api_view(['GET'])
def get_collection(request: Request) -> Response:
    """Get a single collection."""

    try:
        collections = CollectionsService.get_collection(request)
        return Response(data=collections, status=status.HTTP_200_OK)
    except ObjectDoesNotExist:
        return Response({"message": "collection not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def create_collection(request: Request) -> Response:
    """Create a single collection."""

    new_collection = CollectionsService.create_collection(request)
    return Response(data=new_collection.id, status=status.HTTP_201_CREATED)


@api_view(['DELETE'])
def delete_collection(request: Request) -> Response:
    """ Delete a single collection"""

    CollectionsService.delete_collection(request)
    return Response(data={}, status=status.HTTP_204_NO_CONTENT)


@api_view(['PATCH'])
def change_collection_status(request: Request) -> Response:
    """Change the status of a collection"""

    response = CollectionsService.change_collection_status(request)

    return response
