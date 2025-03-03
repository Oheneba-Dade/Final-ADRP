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
def get_OTP(request: Request) -> Response:
    """ Triggers an OTP to be sent to the requester """

    return


@api_view(['POST'])
def verify_OTP(request: Request) -> Response:
    """ Verifies the OTP sent by the requester
        :returns: JWT token
    """

