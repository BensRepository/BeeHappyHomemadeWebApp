from django.urls import path
from . import views

urlpatterns = [
    path('', views.load_index),
    path('crafts', views.load_crafts),
    path('enquire', views.load_enquire),
    path('post', views.post),
    path('postList', views.postList),
]