from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from ...backend_services.dataset_service.dataset_service_main import DatasetService
from django.conf import settings

@api_view(["POST"])
def upload_dataset(request):
    aws_access_key = settings.AWS_ACCESS_KEY_ID
    aws_secret_key = settings.AWS_SECRET_ACCESS_KEY
    # print('key id', aws_access_key, 'access key ',aws_secret_key)  # Debugging

    collection_id = request.data.get("collection_id")
    file_obj = request.FILES.get("file")

    if not file_obj:
        return Response({"error": "No file uploaded."}, status=400)
    

    result = DatasetService.handle_dataset_upload(collection_id, file_obj)

    return Response(result, status=result.get("status", status.HTTP_200_OK))


@api_view(["POST"])
def download_dataset(request):
    collection_id = request.data.get("collection_id")
    filename = request.data.get("filename")

    result = DatasetService.handle_dataset_download(collection_id, filename)
    return Response(result, status=result.get("status", status.HTTP_200_OK))


@api_view(["POST"])
def delete_dataset(request):
    filename = request.data.get("filename")
    collection_id = request.data.get("collection_id")

    result = DatasetService.handle_dataset_delete(collection_id, filename)

    return Response(result, status=result.get("status", status.HTTP_200_OK))


@api_view(["POST"])
def update_dataset(request):
    collection_id = request.data.get("collection_id")
    file_obj = request.FILES.get("file")

    result = DatasetService.handle_dataset_update(collection_id, file_obj)

    return Response( result, status=result.get("status", status.HTTP_200_OK))
