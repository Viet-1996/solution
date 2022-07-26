from django.urls import path
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

app_name = 'solution_page'
urlpatterns = [
    path('', views.index, name='index')
]

urlpatterns += staticfiles_urlpatterns()