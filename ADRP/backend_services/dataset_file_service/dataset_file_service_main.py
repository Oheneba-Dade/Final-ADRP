from ADRP.models import DatasetFile
import boto3
from django.conf import settings



# class Dataset(models.Model):

#     ACCESS_CHOICES = [
#         ('public', 'Public'),
#         ('private', 'Private'),
#         ('restricted', 'Restricted'),
#         # needed or naa ?
#     ]
#     STATUS_CHOICES = [
#         ('pending', 'Pending'),
#         ('approved', 'Approved'),
#         ('rejected', 'Rejected'),
#     ]

#     title = models.CharField(max_length=255)
#     authors = models.ManyToManyField(User, related_name="datasets") # should this just be a text field 
#     abstract = models.TextField()
#     missing_values = models.BooleanField()
#     keywords = models.CharField(max_length=255, help_text="Comma-separated keywords for search and filtering.")
#     data_of_publication = models.DateTimeField()
#     comment = models.TextField(blank=True, null=True)
#     doi_link = models.URLField(max_length=500, null=True)


#     uploaded_by = models.ForeignKey(User, on_delete=models.CASCADE)
#     upload_date = models.DateTimeField(auto_now_add=True)
#     access_level = models.CharField(max_length=20, choices=ACCESS_CHOICES, default='public')
#     tags = models.ManyToManyField("Tag", blank=True)
#     category = models.ForeignKey("Category", on_delete=models.SET_NULL, null=True, blank=True)
    
    
#     approval_status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
#     approved_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='approved_datasets')
#     approved_at = models.DateTimeField(null=True, blank=True)

    
#     def approve(self, admin_user):
#         self.approval_status = 'approved'
#         self.approved_by = admin_user
#         self.approved_at = timezone.now()
#         self.save()

#     def reject(self):
#         self.approval_status = 'rejected'
#         self.save()

#     def is_approved(self):
#         return self.approval_status == 'approved'

#     def __str__(self):
#         formatted_date = localtime(self.upload_date).strftime('%Y-%m-%d %H:%M')
#         return f"{self.title} | Uploaded by: {self.uploaded_by.username} | Date: {formatted_date} | Status: {self.approval_status}"

#     class Meta:
#         ordering = ["-upload_date"]
#         verbose_name = "Dataset"
#         verbose_name_plural = "Datasets"


class dataset_file_services:
    def upload_to_bucket(file_path, filename):
        
        s3_client = boto3.client(
            "s3",
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
        )

        bucket_name = settings.AWS_STORAGE_BUCKET_NAME
        s3_client.upload_file(file_path, bucket_name, filename, ExtraArgs={"ACL": "public-read"}) # will allow anyone with the link to read the file
        # ExtraArgs={"ACL": "private"} Only the owner (AWS account that uploaded the file) can access it.


        file_url = f"https://{bucket_name}.s3.amazonaws.com/{filename}"
        return file_url

   