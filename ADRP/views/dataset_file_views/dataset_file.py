from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from backend_services.dataset_file_service.dataset_file_service_main import DatasetFileService


@api_view(["POST"])
def upload_dataset_file(request):
    dataset_id = request.data.get("dataset_id")
    file_obj = request.FILES.get("file")

    result = DatasetFileService.handle_file_upload(dataset_id, file_obj)

    return Response(result, status=result.get("status", status.HTTP_200_OK))


@api_view(["POST"])
def download_dataset_file(request):
    dataset_id = request.data.get("dataset_id")
    filename = request.data.get("filename")

    result = DatasetFileService.handle_file_download(dataset_id, filename)
    return Response(result, status=result.get("status", status.HTTP_200_OK))


@api_view(["POST"])
def delete_dataset_file(request):
    filename = request.data.get("filename")
    dataset_id = request.data.get("dataset_id")

    result = DatasetFileService.handle_file_delete(dataset_id, filename)

    return Response(result, status=result.get("status", status.HTTP_200_OK))


@api_view(["POST"])
def update_dataset_file(request):
    dataset_id = request.data.get("dataset_id")
    file_obj = request.FILES.get("file")

    result = DatasetFileService.handle_file_update(dataset_id, file_obj)

    return Response( result, status=result.get("status", status.HTTP_200_OK))
