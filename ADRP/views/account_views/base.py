from django.http import JsonResponse, HttpRequest, HttpResponse
from rest_framework.decorators import api_view

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


@api_view(['GET'])
def get_OTP(request: Request) -> HttpResponse:
    """ Get all collections, paginated view"""
    return

