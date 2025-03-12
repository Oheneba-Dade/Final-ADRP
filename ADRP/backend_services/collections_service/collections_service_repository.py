from ...models import Collection, Authors
from django.core.exceptions import ObjectDoesNotExist
from ..custom_pagination import BasicPagination, AdminPagination
from ...serializers import CollectionSerializer
import json


def get_collection_by_id(collection_id):
    #TODO Lock this down
    try:
        return Collection.objects.get(id=collection_id)
    except Collection.DoesNotExist:
        raise ObjectDoesNotExist("Collection not found.")


def create_collection(user, collection):
    new_collection = Collection(uploaded_by=user, **collection)
    new_collection.save()

    return new_collection


# def create_collection_authors()

def get_all_collections(request, status, admin=False):
    """ Returns a paginated list of all collections"""
    paginator = AdminPagination() if admin else BasicPagination()

    lazy_query = Collection.objects.filter(approval_status=status)
    results = paginator.paginate_queryset(lazy_query, request)
    serializer = CollectionSerializer(results, many=True)

    return paginator.get_paginated_response(serializer.data)


def change_collection_status(collection_id, status):
    collection = get_collection_by_id(collection_id)
    collection.status = status
    collection.save()


def increment_collection_views(collection: Collection):
    collection.view_count += 1
    collection.save()
    return collection


def save_authors(request_obj, collection: Collection):
    """Associates authors with a collection"""
    authors = json.loads(request_obj.data.get('authors'))
    print(type(request_obj.data.get('authors')))
    for author in authors:
        obj, _ = Authors.objects.get_or_create(email=author['email'], name=author['name'])
        collection.authors.add(obj)
