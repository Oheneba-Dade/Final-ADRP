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
from ...backend_services.accounts_service.accounts_service_main import AccountsService

from ..error_handling import handle_exceptions


@api_view(['GET'])

def get_OTP(request: Request) -> Response:
    """ Triggers an OTP to be sent to the requester """

    AccountsService.get_otp(request)
    return Response('OTP Generated', status=status.HTTP_200_OK)




@api_view(['POST'])
def login(request: Request) -> Response:
    """ Verifies the OTP sent by the requester
        :returns: JWT token
    """

    data = AccountsService.login(request)
    return Response(data)

@api_view(['GET'])
def whoami(request: Request) -> Response:
    """Returns the email based on the token"""

    data = request.user
    return Response(data.email, status=status.HTTP_200_OK)



