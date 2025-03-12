from rest_framework import serializers
from ADRP.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class DatasetFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = DatasetFile
        fields = '__all__'

# class DatasetSerializer(serializers.ModelSerializer):
#     files = DatasetFileSerializer(many=True, read_only=True)
#     uploaded_by = serializers.ReadOnlyField(source='uploaded_by.username')
#
#     class Meta:
#         model = Dataset
#         fields = '__all__'


# class CollectionSerializer(serializers.ModelSerializer):
#     title = serializers.CharField(source='title')
#     authors = serializers.CharField(source='authors')
#     doi = serializers.CharField(source='doi_link')
#     keywords = serializers.CharField(source='keywords')
#     abstract = serializers.CharField(source='abstract')
#     instance_representation = serializers.CharField(source='instance_representation')
#     missing_valu
#
#
#     class Meta:
#         model = Collection
#         fields = ['name', 'description']


class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = ['id','title', 'doi_link','keywords','abstract','instance_representation',
                  'missing_values','comment', 'approval_status', 'view_count','date_of_publication']