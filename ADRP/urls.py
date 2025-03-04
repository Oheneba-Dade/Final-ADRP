"""
URL configuration for ADRP project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from .views.collection_views.collections import *
from .views.dataset_file_views.dataset_file import * 
urlpatterns = [
    path("admin/", admin.site.urls),
    path("adrp/get_all_collections/", get_all_collections),
    path("adrp/get_collection/", get_collection),
    path("adrp/create_collection", create_collection),

    # dataseet 
    path("adrp/dataset_file_upload/", upload_dataset_file, name="upload_dataset_file"),
    path("adrp/dataset_file_download/", download_dataset_file, name="download_dataset_file"),
    path("adrp/dataset_file_delete/", delete_dataset_file, name="delete_dataset_file"),
    path("adrp/dataset_file_update/", update_dataset_file, name="update_dataset_file"),
]
