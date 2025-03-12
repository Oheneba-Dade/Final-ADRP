from rest_framework import serializers
from ADRP.models import *
from rest_framework.exceptions import NotFound, ValidationError


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

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Authors
        fields = '__all__'


class CollectionSerializer(serializers.ModelSerializer):
    authors = AuthorSerializer(many=True, read_only=True)

    class Meta:
        model = Collection
        fields = ['id', 'title', 'doi_link', 'keywords', 'abstract', 'instance_representation',
                  'missing_values', 'comment', 'date_of_publication', 'approval_status', 'view_count',  'authors']

    def create(self, validated_data):
        # authors_data = validated_data.pop('authors', [])
        uploaded_by = self.context['request'].user  # Get user from context

        collection = Collection.objects.create(uploaded_by=uploaded_by, **validated_data)

        # for author_data in authors_data:
        #     author, _ = Authors.objects.get_or_create(**author_data)
        #     collection.authors.add(author)

        return collection

    @staticmethod
    def validate_status(status):
        if status not in dict(Collection.STATUS_CHOICES):
            raise ValidationError('Status is not valid')
        return status