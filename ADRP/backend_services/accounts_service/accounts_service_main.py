import secrets
import string
from rest_framework.request import Request
from ...models import OTP, User
from .accounts_service_repository import create_new_otp, user_exists_by_email
from ..email_service.email_service_main import EmailService
from django.db import transaction

class AccountsService:

    @staticmethod
    def check_user_exists(request_obj: Request) -> bool:
        return user_exists_by_email(request_obj.query_params.get("email"))

    @staticmethod
    def generate_otp(otp_length=6, lifetime=5) -> tuple[str, int]:
        """Generates an OTP for a user.

        :param request: Request object with request parameters
        :param otp_length: Number of characters in the OTP string. Default is 6
        :param lifetime: Valid lifetime of the OTP in minutes. Default is 5 minutes
        :param admin: Boolean flag to indicate if the user is an administrator
        :returns: Returns a tuple containing the OTP and its lifetime in minutes
        """

        # Generate the OTP
        chars = string.ascii_uppercase + string.digits
        otp_chars = ''.join(secrets.choice(chars) for char in range(otp_length))

        return otp_chars, lifetime

    @staticmethod
    def associate_otp_with_user(request_obj: Request, otp_ref: tuple[str, int]) -> OTP:
        """Associates an OTP with a particular user. Creates the user if they do not exist since this
        also accommodates sign up

        :param request_obj: Request object with request parameters
        :param otp_ref: Tuple containing otp characters and lifetime
        :returns: OTP object associated with the user"""

        new_otp, lifetime = otp_ref

        # Associate with user (create user if they are new)
        user = User.objects.filter(email=request_obj.query_params.get("email")).first()
        if user:
            new_otp = create_new_otp(user, new_otp, lifetime)
        else:
            user = AccountsService.create_new_user(request_obj)
            new_otp = create_new_otp(user, new_otp, lifetime)

        return new_otp

    @staticmethod
    def create_new_user(request_obj: Request) -> User:
        """Creates a new regular user. Automatically determines if a user is 'Internal or 'External'
        based on the email address domain"""

        return User.objects.create_user(email=request_obj.query_params.get("email"))

    @staticmethod
    def create_new_admin(request_obj: Request) -> User:
        """Creates a new admin user."""

        return User.objects.create_admin(email=request_obj.query_params.get("email"), role='admin')

    @staticmethod
    def send_otp(otp_obj: OTP):
        """ Sends the OTP to its associated user """

        email_service = EmailService(recipients=[otp_obj.user.email],
                                     purpose="LOGIN",
                                     context={"otp": otp_obj.otp, "otp_lifetime": otp_obj.life_time_mins})
        email_service.send()

    @staticmethod
    @transaction.atomic
    def get_otp(request_obj: Request) -> OTP:
        """Performs the full OTP retrieval and delivery chain: generate, associate, send"""

        otp_details = AccountsService.generate_otp()
        new_otp = AccountsService.associate_otp_with_user(request_obj, otp_details)

        AccountsService.send_otp(new_otp)

        return new_otp
