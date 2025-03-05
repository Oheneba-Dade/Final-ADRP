from django.utils import timezone
from django.contrib.auth import get_user_model
from django.core.files.uploadedfile import SimpleUploadedFile
from rest_framework import status
from rest_framework.test import APITestCase
from ADRP.models import Collection, DatasetFile

User = get_user_model()  

class CollectionFileAPITestCase(APITestCase):
    def setUp(self):
        """Set up test data before running each test"""
        self.user = User.objects.create_user(password="password123", email='testuser@email.com')
        self.client.force_authenticate(user=self.user)  


        self.collection = Collection.objects.create(
            title="Test Collection",
            abstract="Test Abstract",
            missing_values=False,
            keywords="test, dataset",
            uploaded_by=self.user,
            upload_date=timezone.now()
        )

        self.collection_id = str(self.collection.id)  


        print("Collection count after setup:", Collection.objects.count())  
        print("Created collection:abstract ", self.collection.abstract)  


        self.upload_url = "/adrp/dataset_upload/"
        self.download_url = "/adrp/dataset_download/"
        self.delete_url = "adrp/dataset_delete/"
        self.update_url = "adrp/dataset_update/"
        self.get_collection_by_id = "/adrp/get_collection/"

        self.test_file = SimpleUploadedFile("test_file_1.txt", b"Sample file content")




  

    # def test_get_collection(self):
    #     """Test retrieving a collection by its ID."""
    #     response = self.client.get(f"{self.get_collection_by_id}?collection_id={self.collection.id}")

    #     print("Response Status Code:", response.status_code)
    #     print("Response Data:", response.json() if response.status_code == 200 else "No Data")

    #     self.assertEqual(response.status_code, status.HTTP_200_OK)

    # def test_get_collection_2(self):
    #     """Test retrieving a collection by its ID."""
    #     response = self.client.get(self.get_collection_by_id, {"collection_id": self.collection.id})
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     self.assertIn("title", response.data)
    #     self.assertEqual(response.data["title"], "Sample Collection")

    
    # def test_download_collection_file(self):
    #     """Test downloading a file from a collection"""
    #     data = {"collection_id": self.collection_id, "filename": "test_file.txt"}
    #     response = self.client.post(self.download_url, data, format="json")
    #     print("Response JSON:", response.json() if response.headers.get("content-type") == "application/json" else response.content.decode())
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_upload_collection_file(self):
        """Test uploading a file to a collection"""
        data = {"collection_id": self.collection_id, "file": self.test_file}
        response = self.client.post(self.upload_url, data, format="multipart")
        print("Response JSON:", response.json() if response.headers.get("content-type") == "application/json" else response.content.decode())
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


    # def test_delete_collection_file(self):
    #     """Test deleting a file from a collection"""
    #     data = {"dataset_id": self.collection_id, "filename": "test_file.txt"}
    #     response = self.client.post(self.delete_url, data, format="json")
    #     print(response)
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)

    # def test_update_collection_file(self):
    #     """Test updating a file in a collection"""
    #     data = {"dataset_id": self.collection_id, "file": self.test_file}
    #     response = self.client.post(self.update_url, data, format="multipart")
    #     print(response)
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
