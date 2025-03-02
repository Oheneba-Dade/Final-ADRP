from ...models import OTP
from django.utils import timezone


def create_new_otp(user, otp, lifetime):
    now = timezone.now()

    new_otp = OTP(user=user,
                  otp=otp,
                  created_at=now,
                  expiry_date=now + timezone.timedelta(minutes=lifetime))

    new_otp.save()
    return new_otp
