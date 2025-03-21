from django.http import JsonResponse, HttpRequest, HttpResponse
from rest_framework.decorators import api_view
from django_filters import rest_framework as filters
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from ADRP.models import Collection
from ADRP.serializers import CollectionSerializer
from .filters import CollectionFilter
from rest_framework.pagination import PageNumberPagination

# from ...backend_services.orders_service.order_service_main import OrderService
# from ...models import
from rest_framework.decorators import api_view
import traceback
from rest_framework.response import Response
from rest_framework import status
from rest_framework.request import Request
from django.db import transaction
from ...backend_services.collections_service.collections_service_main import CollectionsService
from ..error_handling import handle_exceptions
from django.core.exceptions import ObjectDoesNotExist



@api_view(['GET'])
def get_all_collections(request: Request) -> HttpResponse:
    """ Get all collections, paginated view"""

    collections = CollectionsService.get_all_collections()
    return JsonResponse(data=collections, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_collection(request: Request) -> Response:
    """Get a single collection."""

    try:
        collections = CollectionsService.get_collection(request)
        return Response(data=collections, status=status.HTTP_200_OK)
    except ObjectDoesNotExist:
        return Response({"message":"collection not found"}, status=status.HTTP_404_NOT_FOUND)


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


# filter stuff

class CollectionPagination(PageNumberPagination):
    page_size = 10 
    page_size_query_param = 'page_size'
    max_page_size = 100


class CollectionListView(generics.ListAPIView):
    queryset = Collection.objects.all().filter(approval_status="approved")
    serializer_class = CollectionSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = CollectionFilter
    ordering_fields = ['date_of_publication', 'title']
    ordering = ['-date_of_publication']
    pagination_class = CollectionPagination