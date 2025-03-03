from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from backend_services.dataset_file_service.dataset_file_service_main import DatasetFileService


@api_view(["POST"])
def upload_dataset_file(request):
    dataset_id = request.data.get("dataset_id")
    file_obj = request.FILES.get("file")

    if not dataset_id or not file_obj:
        return Response({"message": "Dataset ID and file are required."}, status=status.HTTP_400_BAD_REQUEST)

    result = DatasetFileService.handle_file_upload(dataset_id, file_obj)

    return Response(
        {"message": result.get("message"), "file_url": result.get("file_url")},
        status=result.get("status", status.HTTP_200_OK))


def download_dataset_file(request):
    pass


@api_view(["POST"])
def delete_dataset_file(request):
    filename = request.data.get("filename")
    dataset_id = request.data.get("dataset_id")

    if not dataset_id or not filename:
        return Response({"message": "Dataset ID and filename are required."}, status=status.HTTP_400_BAD_REQUEST)

    result = DatasetFileService.handle_file_delete(dataset_id, filename)

    return Response(
            {"message": result.get("message"), "file_url": result.get("file_url")},status=result.get("status", status.HTTP_200_OK))


@api_view(["POST"])
def update_dataset_file(request):
    dataset_id = request.data.get("dataset_id")
    file_obj = request.FILES.get("file")

    if not dataset_id or not file_obj:
        return Response({"message": "Dataset ID and file are required."}, status=status.HTTP_400_BAD_REQUEST)

    result = DatasetFileService.handle_file_update(dataset_id, file_obj)

    return Response(
        {"message": result.get("message"), "file_url": result.get("file_url")},status=result.get("status", status.HTTP_200_OK))
