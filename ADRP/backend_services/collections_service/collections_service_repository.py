from ...models import Collection


def get_collection_by_id(collection_id):
    return Collection.objects.filter(id=collection_id).first()


def create_collection(collection):
    new_collection = Collection(**collection)
    new_collection.save()

    return new_collection

