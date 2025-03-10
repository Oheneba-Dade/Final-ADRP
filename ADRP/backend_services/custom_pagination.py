from rest_framework.pagination import PageNumberPagination


class BasicPagination(PageNumberPagination):
    page_size = 5
    page_query_param = 'page'
    last_page_strings = ('last' , 'final')



class AdminPagination(PageNumberPagination):
    page_size = 15
    page_query_param = 'page'
    last_page_strings = ('last' , 'final')




