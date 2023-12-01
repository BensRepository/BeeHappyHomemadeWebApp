from django.shortcuts import render
from django.http import HttpResponse
import requests
# Create your views here.
def load_index(request):
    return render(request,'index.html')