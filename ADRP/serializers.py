from rest_framework import serializers
from ADRP.models import *

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
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
        fields = ['title', 'doi_link','keywords','abstract','instance_representation',
                  'missing_values','comment']