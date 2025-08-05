from django.utils import timezone
from django.contrib.auth import get_user_model
from django.core.files.uploadedfile import SimpleUploadedFile
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Collection, DatasetFile, Authors
from itertools import chain

User = get_user_model()  

class CollectionFileAPITestCase(APITestCase):
    def setUp(self):
        """Set up test data before running each test"""

        self.test_user_1 = User.objects.create_user(
            password="password123",
            email='testuser_1@ashesi.edu.gh',
            role='internal')
        self.test_user_1.role = 'Internal'
        self.client.force_authenticate(user=self.test_user_1)  

        
        # print('test user', self.test_user)


        

        self.collection1 = Collection.objects.create(
            title="Climate Change Data",
            abstract="Climate-related datasets",
            keywords=["Climate", "Environment"],

            uploaded_by=self.test_user_1
        )
        
        self.collection_id = self.collection1.id

        self.data=  { "id": self.collection_id, "approval_status": "rejected"}
        # collection3 = Collection.objects.create(
        #     title="Blockchain for Secure Transactions",
        #     abstract="Using blockchain to enhance financial security",
        #     missing_values=False,
        #     keywords=["Blockchain", "Security", "Finance"],
        #     uploaded_by=self.test_user,
        #     date_of_publication="2024-01-15",
        #     access_level="public"
        # )

        # collection4 = Collection.objects.create(
        #     title="Deep Learning in NLP Beyond AI",
        #     abstract="Applying deep learning techniques to natural language processing",
        #     missing_values=True,
        #     keywords=["Deep Learning", "NLP", "AI"],
        #     uploaded_by=self.test_user,
        #     date_of_publication="2023-11-30",
        #     access_level="restricted"
        # )


        # # self.collection = Collection.objects.create(
        #     title="Test Collection",
        #     abstract="Test Abstract",
        #     missing_values=False,
        #     keywords="test, dataset",
        #     uploaded_by=self.user,
        #     upload_date=timezone.now()
        # )
        # self.collection_id = str(self.collection.id)  


        # print("Collection count after setup:", Collection.objects.count())  
        # print("collection id ", self.collection_id)
        # print("Created collection:abstract ", self.collection.abstract)  

        # self.test_file = SimpleUploadedFile("example_4.txt", b"Sample file content")
        # self.updated_test_file = SimpleUploadedFile("example_4.txt", b"Sample file content updated")

        self.upload_url = "/adrp/dataset_upload/"
        self.download_url = "/adrp/dataset_download/"
        self.delete_url = "/adrp/dataset_delete/"
        self.update_url = "/adrp/dataset_update/"
        self.get_collection_by_id = "/adrp/get_collection/"
        self.filter_url = "/adrp/collections"
        self.upload_url = "/adrp/upload_collection"
        self.approve_collecton = "/adrp/collection_status"
        

    def test_workflow(self):
        """
            1. create a collection as a user
            2. check if its in the initial folder
            3. approve collection as admin
            4. check if its in the approved folder 
        """
        pass

    # def test_collection_status(self):
    #     """Test approval and rejection"""

    #     self.test_user = User.objects.create_admin(password="password123", email='testuser@ashesi.edu.gh')
    #     self.client.force_authenticate(user=self.test_user)  


    #     response = self.client.patch(self.approve_collecton, self.data, format='json')
    #     print("change collection status Response:", response.json() if response.headers.get("content-type") == "application/json" else response.content.decode())

    #     self.assertEqual(response.status_code, 200)
    #     self.assertEqual("rejected", response.data['approval_status'])
    #     self.assertIn("rejected_at", response.data['rejected_at'])

    #     print("✅ Filtering by title test passed!")

  

    # def test_upload_collection_with_file(self):
    #     """Test uploading a new collection along with a dataset file"""

      
    #     # Create a fake file
    #     file_content = b"col1,col2\nval1,val2"
    #     test_file = SimpleUploadedFile("test_dataset.csv", file_content, content_type="text/csv")
    #     author = Authors.objects.create(name="John Doe")
        

    #     data = {
    #         "title": "Test Collection Upload",
    #         "abstract": "Testing upload with file",
    #         "keywords": '["test", "upload"]',  
    #         #"uploaded_by": self.test_user,
    #         "file": test_file,  
    #     }

    #     # Send POST request
    #     response = self.client.post(self.upload_url, data, format='multipart')
    #     # print("Upload Response:", response.json() if response.headers.get("content-type") == "application/json" else response.content.decode())

    #     self.assertEqual(response.status_code, 201)
    #     self.assertIn("id", response.data)


    # def test_filtering_title(self):
    #     response = self.client.get(f"{self.filter_url}?title=AI")

    #     self.assertEqual(response.status_code, 200)
        
    #     results = response.json()
    #     # self.assertIsInstance(results, list)
    #     titles = [item["title"] for item in results['results']]
        
    #     self.assertIn("AI for Healthcare", titles)
    #     self.assertIn("Deep Learning in NLP Beyond AI", titles)
    #     self.assertNotIn("Climate Change Data", titles) 

    #     print("✅ Filtering by title test passed!")


    # def test_filtering_title_keywords(self):
    #     response = self.client.get(f"{self.filter_url}?title=AI&keywords=AI,NLP")

    #     self.assertEqual(response.status_code, 200)
        
    #     results = response.json()
    #     titles = [item["title"] for item in results['results']]
    #     keywords = [item["keywords"]for item in results['results']]
    #     keywords_list= []
    #     for keyword in keywords:
    #         keywords_list += keyword
        
    #     self.assertIn("Deep Learning in NLP Beyond AI", titles)
    #     self.assertIn("AI for Healthcare", titles)
    #     self.assertNotIn("Climate Change Data", titles) 
    #     self.assertIn("NLP",keywords_list )
    #     self.assertIn("Deep Learning", keywords_list)
    #     self.assertNotIn("Blockchain", keywords_list)



    #     print("✅ Filtering by title and key workdtest passed!")

    # def test_get_collection(self):
    #     """Test retrieving a collection by its ID."""
    #     response = self.client.get(f"{self.get_collection_by_id}?collection_id={self.collection.id}")

    #     print("Response Status Code:", response.status_code)
        # print("Response Data:", response.json() if response.status_code == 200 else "No Data")

    #     self.assertEqual(response.status_code, status.HTTP_200_OK)

    # def test_get_collection_2(self):
    #     """Test retrieving a collection by its ID."""
    #     response = self.client.get(self.get_collection_by_id, {"collection_id": self.collection.id})
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     self.assertIn("title", response.data)
    #     self.assertEqual(response.data["title"], "Sample Collection")

    
    # def test_dataset_workflow_1_delete(self):
    #       # Upload
    #     data = {"collection_id": self.collection_id, "file": self.test_file}
    #     upload_response = self.client.post(self.upload_url, data, format="multipart")
    #     print("Upload Response:", upload_response.json() if upload_response.headers.get("content-type") == "application/json" else upload_response.content.decode())
    #     self.assertEqual(upload_response.status_code, status.HTTP_201_CREATED)

    #     # Download
    #     data = {"collection_id": self.collection_id, "filename": "example_3.txt"}
    #     download_response = self.client.post(self.download_url, data, format="json")
    #     print("Download Response:", download_response.json() if download_response.headers.get("content-type") == "application/json" else download_response.content.decode())
    #     self.assertEqual(download_response.status_code, status.HTTP_200_OK)

    #     # Delete
    #     data_del = {"collection_id": self.collection_id, "filename": "example_3.txt"}

    #     delete_response = self.client.post(self.delete_url, data_del, format="json")
    #     # print("Delete Response:", delete_response)
    #     print("Delete Response JSON:", delete_response.json() if delete_response.headers.get("content-type") == "application/json" else response.content.decode())

    #     self.assertEqual(delete_response.status_code, status.HTTP_200_OK)


  
    # def test_dataset_workflow_2_update(self):
    #       # Upload
    #     data = {"collection_id": self.collection_id, "file": self.test_file}
    #     upload_response = self.client.post(self.upload_url, data, format="multipart")
    #     print("Upload Response:", upload_response.json() if upload_response.headers.get("content-type") == "application/json" else upload_response.content.decode())
    #     self.assertEqual(upload_response.status_code, status.HTTP_201_CREATED)

       

    #     # Update
    #     data = {"collection_id": self.collection_id, "filename": "example_3.txt"}
    #     update_response = self.client.post(self.update_url, data, format="json")
    #     # print("Delete Response:", delete_response)
    #     print("Delete Response JSON:", update_response.json() if update_response.headers.get("content-type") == "application/json" else response.content.decode())

    #     self.assertEqual(update_response.status_code, status.HTTP_200_OK)


    # # Download
    #     data = {"collection_id": self.collection_id, "filename": "example_3.txt"}
    #     download_response = self.client.post(self.download_url, data, format="json")
    #     print("Download Response:", download_response.json() if download_response.headers.get("content-type") == "application/json" else download_response.content.decode())
    #     self.assertEqual(download_response.status_code, status.HTTP_200_OK)

    # def test_upload_collection_file(self):
    #     """Test uploading a file to a collection"""
    #     data = {"collection_id": self.collection_id, "file": self.test_file}
    #     response = self.client.post(self.upload_url, data, format="multipart")
    #     print("Response JSON:", response.json() if response.headers.get("content-type") == "application/json" else response.content.decode())
    #     self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    # def test_download_collection_file(self):
    #         """Test downloading a file from a collection"""
    #         data = {"collection_id": self.collection_id, "filename": "example.txt"}
    #         response = self.client.post(self.download_url, data, format="json")
    #         print("Response JSON:", response.json() if response.headers.get("content-type") == "application/json" else response.content.decode())
    #         self.assertEqual(response.status_code, status.HTTP_200_OK)

    # def test_delete_collection_file(self):
    #     """Test deleting a file from a collection"""
    #     data = {"collection_id": self.collection_id, "filename": "example.txt"}
    #     response = self.client.post(self.delete_url, data, format="json")
    #     print(response)
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)

    # def test_update_collection_file(self):
    #     """Test updating a file in a collection"""
    #     data = {"collection_id": self.collection_id, "file": self.test_file}
    #     response = self.client.post(self.update_url, data, format="multipart")
    #     print(response)
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
