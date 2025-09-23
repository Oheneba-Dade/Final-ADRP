# from ...backend_services.orders_service.order_service_main import OrderService
# from ...models import
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.request import Request
from rest_framework.response import Response

from ...backend_services.accounts_service.accounts_service_main import AccountsService
from ...backend_services.accounts_service.custom_permissions import *


@api_view(['GET'])
@permission_classes([AllowAny])
def get_OTP(request: Request) -> Response:
    """ Triggers an OTP to be sent to the requester """

    AccountsService.get_otp(request)
    return Response('OTP Generated', status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny])
def login(request: Request) -> Response:
    """ Verifies the OTP sent by the requester
        :returns: JWT token if successful, None otherwise
    """

    data = AccountsService.login(request)
    return Response(data)

@api_view(['POST'])
@permission_classes([isAuthenticated])
def complete_registration(request: Request) -> Response:
    """ Allows a user to submit complete account details
    """
    AccountsService.complete_registration(request)
    return Response('Registration Completed', status=status.HTTP_201_CREATED)

@api_view(['GET'])
@permission_classes([isAuthenticated])
def get_user_details(request: Request) -> Response:
    """ Allows a user to submit complete account details
    """
    data = AccountsService.get_user_details(request)
    return Response(data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsInternalAdmin])
def whoami(request: Request) -> Response:
    """Returns the email address of the user based on the auth token provided"""

    data = request.user
    return Response(data.email, status=status.HTTP_200_OK)
