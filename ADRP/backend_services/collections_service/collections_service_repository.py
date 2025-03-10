from ...models import Collection
from django.core.exceptions import ObjectDoesNotExist
from ..custom_pagination import BasicPagination, AdminPagination
from ...serializers import CollectionSerializer


def get_collection_by_id(collection_id):
    try:
        return Collection.objects.get(id=collection_id) 
    except Collection.DoesNotExist: 
          raise ObjectDoesNotExist("Collection not found.")


def create_collection(user, collection):
    new_collection = Collection(uploaded_by=user,**collection)
    new_collection.save()

    return new_collection

# def create_collection_authors()

def get_all_collections(request, admin = False):
    """ Returns a paginated list of all collections"""
    paginator = AdminPagination() if admin else BasicPagination()

    lazy_query = Collection.objects.all()
    results = paginator.paginate_queryset(lazy_query, request)
    serializer = CollectionSerializer(results, many=True)
    return paginator.get_paginated_response(serializer.data)