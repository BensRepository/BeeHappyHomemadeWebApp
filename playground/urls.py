from django.urls import path
from . import views

urlpatterns = [
    path('', views.load_index),
    path('crafts', views.load_crafts),
]