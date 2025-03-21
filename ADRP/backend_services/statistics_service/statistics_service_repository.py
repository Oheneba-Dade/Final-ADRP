from ...models import Collection, Authors, DatasetFile
from ...models import Statistics
# def get_view_count():
#
#     return
#
#
# def get_download_count():
#     return
#
#
# def get_collection_count():
#     return
#
#
# def get_contributor_count():
#     return

def get_all_stats():
    """Returns the first row of the collections table which SHOULD contain
    the auto updated stats for the website"""
    return Statistics.objects.filter(id=1).first()
