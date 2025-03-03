from ...models import OTP, User
from django.utils import timezone


def create_new_otp(user, otp, lifetime) -> OTP:
    now = timezone.now()

    new_otp = OTP(user=user,
                  otp=otp,
                  created_at=now,
                  expiry_date=now + timezone.timedelta(minutes=lifetime))

    new_otp.save()
    return new_otp


def user_exists_by_email(email) -> bool:
    exists = User.objects.filter(email=email).exists()

    return exists
