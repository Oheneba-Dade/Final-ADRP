from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from ...backend_services.dataset_service.dataset_service_main import DatasetService


@api_view(["POST"])
def upload_dataset(request):
    dataset_id = request.data.get("dataset_id")
    file_obj = request.FILES.get("file")

    result = DatasetService.handle_dataset_upload(dataset_id, file_obj)

    return Response(result, status=result.get("status", status.HTTP_200_OK))


@api_view(["POST"])
def download_dataset(request):
    dataset_id = request.data.get("dataset_id")
    filename = request.data.get("filename")

    result = DatasetService.handle_dataset_download(dataset_id, filename)
    return Response(result, status=result.get("status", status.HTTP_200_OK))


@api_view(["POST"])
def delete_dataset(request):
    filename = request.data.get("filename")
    dataset_id = request.data.get("dataset_id")

    result = DatasetService.handle_dataset_delete(dataset_id, filename)

    return Response(result, status=result.get("status", status.HTTP_200_OK))


@api_view(["POST"])
def update_dataset(request):
    dataset_id = request.data.get("dataset_id")
    file_obj = request.FILES.get("file")

    result = DatasetService.handle_dataset_update(dataset_id, file_obj)

    return Response( result, status=result.get("status", status.HTTP_200_OK))
