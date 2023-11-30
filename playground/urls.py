from django.urls import path
from . import views 
from rest_framework.routers import DefaultRouter
from .views import WebAppViewset
#Url config / routes

router = DefaultRouter()

urlpatterns =[

    path("",WebAppViewset.load_index, name='index')
    ]





