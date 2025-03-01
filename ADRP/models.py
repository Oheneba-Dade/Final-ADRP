from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.utils.timezone import localtime
from django.utils import timezone

class UserProfile(models.Model):
    ROLE_CHOICES = [
        # fill with actual user roles 
        ('interal', 'Internal'),
        ('external', 'External')
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='viewer')
    # would we need the department info as well

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user.username} ({self.role if self.role else 'No Role'})"

    class Meta:
        ordering = ["user__username"]
        verbose_name = "User Profile"
        verbose_name_plural = "User Profiles"



class Authors(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.name + self.email

class Collection(models.Model):

    ACCESS_CHOICES = [
        ('public', 'Public'),
        ('private', 'Private'),
        ('restricted', 'Restricted'),
        # needed or naa ?
    ]
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]

    title = models.CharField(max_length=255)
    authors = models.ManyToManyField(Authors)
    abstract = models.TextField()
    missing_values = models.BooleanField()
    keywords = models.CharField(max_length=255, help_text="Comma-separated keywords for search and filtering.")
    date_of_publication = models.DateTimeField(default=timezone.now)
    comment = models.TextField(blank=True, null=True)
    doi_link = models.URLField(max_length=500, null=True)
    instance_representation = models.CharField(max_length=500, blank=True, null=True, help_text="What do the instances "
                                                                                                "in the dataset represent")


    uploaded_by = models.ForeignKey(User, on_delete=models.CASCADE)
    upload_date = models.DateTimeField(default=timezone.now)
    access_level = models.CharField(max_length=20, choices=ACCESS_CHOICES, default='public')
    tags = models.ManyToManyField("Tag", blank=True)
    category = models.ForeignKey("Category", on_delete=models.SET_NULL, null=True, blank=True)
    
    
    approval_status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    approved_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='approved_collections')
    approved_at = models.DateTimeField(null=True, blank=True)

    
    def approve(self, admin_user):
        self.approval_status = 'approved'
        self.approved_by = admin_user
        self.approved_at = timezone.now()
        self.save()

    def reject(self):
        self.approval_status = 'rejected'
        self.save()

    def is_approved(self):
        return self.approval_status == 'approved'

    def __str__(self):
        formatted_date = localtime(self.upload_date).strftime('%Y-%m-%d %H:%M')
        return f"{self.title} | Uploaded by: {self.uploaded_by.username} | Date: {formatted_date} | Status: {self.approval_status}"

    class Meta:
        ordering = ["-upload_date"]
        verbose_name = "Dataset"
        verbose_name_plural = "Collections"



class DatasetFile(models.Model):
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE, related_name="files", null=True,blank=True)
    file_name  = models.CharField(max_length=50)
    file_url = models.URLField(max_length=500)
    file_type = models.CharField(max_length=50, blank=True, null=True)  # CSV, JSON, Excel, etc.
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.Collection.title} - {self.file.url}"


class Tag(models.Model):
    TAG_CHOICES = [
        ("Machine Learning", "Machine Learning"),
        ("Computer Vision", "Computer Vision"),
        ("Cybersecurity", "Cybersecurity"),
        ("Blockchain", "Blockchain"),
        # should we use predifined choices
    ]
    
    name = models.CharField(max_length=50, choices=TAG_CHOICES, unique=True)

    def __str__(self):
        return self.name


class Category(models.Model):
    # do we use choices for categories too
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Review(models.Model):
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE, related_name="reviews", null=True,blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(default=5)  # are we using the rating??
    comment = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review by {self.user.username} on {self.collection.title}"


class AccessRequest(models.Model):

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]

    collection = models.ForeignKey(Collection, on_delete=models.CASCADE, related_name="access_requests", blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    justification = models.TextField()
    status = models.CharField(max_length=20, choices= STATUS_CHOICES, default='pending')
    requested_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Access request for {self.collection.title} by {self.user.username}"
