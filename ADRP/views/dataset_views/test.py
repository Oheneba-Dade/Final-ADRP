from rest_framework.test import APITestCase
from rest_framework import status
from django.core.files.uploadedfile import SimpleUploadedFile

class DatasetFileAPITestCase(APITestCase):
    def setUp(self):
        self.upload_url = "/dataset/upload/"
        self.download_url = "/dataset/download/"
        self.delete_url = "/dataset/delete/"
        self.update_url = "/dataset/update/"

        self.dataset_id = "1234"
        self.test_file = SimpleUploadedFile("test_file.txt", b"Sample file content")

    def test_upload_dataset(self):
        """Test uploading a dataset file"""
        data = {"dataset_id": self.dataset_id, "file": self.test_file}
        response = self.client.post(self.upload_url, data, format="multipart")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_download_dataset(self):
        """Test downloading a dataset file"""
        data = {"dataset_id": self.dataset_id, "filename": "test_file.txt"}
        response = self.client.post(self.download_url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_delete_dataset(self):
        """Test deleting a dataset file"""
        data = {"dataset_id": self.dataset_id, "filename": "test_file.txt"}
        response = self.client.post(self.delete_url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_dataset(self):
        """Test updating a dataset file"""
        data = {"dataset_id": self.dataset_id, "file": self.test_file}
        response = self.client.post(self.update_url, data, format="multipart")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
