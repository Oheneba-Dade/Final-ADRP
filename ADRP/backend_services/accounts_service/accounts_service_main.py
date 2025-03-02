import secrets
import string
from rest_framework.request import Request
from ...models import OTP
from .accounts_service_repository import create_new_otp


class AccountsService:

    @staticmethod
    def generate_otp(request: Request, otp_length=6, lifetime=5) -> OTP:
        """Generates and associates an OTP with a particular user

        :param request: Request object with request parameters
        :param otp_length: Number of characters in the OTP string. Default is 6
        :param lifetime: Valid lifetime of the OTP in minutes. Default is 5 minutes
        :returns: Returns the new OTP object
        """
        chars = string.ascii_uppercase + string.digits
        otp_chars = ''.join(secrets.choice(chars) for char in range(otp_length))

        new_otp = create_new_otp(request.user, otp_chars, lifetime)

        return new_otp

    @staticmethod
    def send_otp():
        """Sends the OTP to the user"""

        # TODO @Oheneba-Dade
        # You will need to use the email_service for this.


        return
