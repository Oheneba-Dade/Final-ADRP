from enum import Enum
from django.core.mail import EmailMultiAlternatives

class EmailService:
    class Purpose(Enum):
        LOGIN = "LOGIN"
        DOWNLOAD_DATASET = "DOWNLOAD_DATASET"
        APPROVE_SUBMISSION = "APPROVE_SUBMISSION"
        REJECT_SUBMISSION = "REJECT_SUBMISSION"
        NEW_SUBMISSION = "NEW_SUBMISSION"


    def __init__(self, recipient, purpose, subject = None, body = None,):
        if not isinstance(purpose, EmailService.Purpose):
            raise ValueError("Purpose must be of type EmailService.Purpose")

        self.recipient = recipient
        self.subject = subject
        self.body = body
        self.purpose = purpose





