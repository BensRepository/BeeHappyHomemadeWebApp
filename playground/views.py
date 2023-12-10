from django.shortcuts import render
from django.http import HttpResponse
import requests
import glob
from BeeHappyHomemadeProject.settings import STATIC_URL
# Create your views here.
def load_index(request):
    return render(request,'index.html')

def load_crafts(request):
    return render(request,'crafts.html')


def load_enquire(request):
    itemTypes = glob.glob("."+STATIC_URL+"images/item-types/*")
    context = {}
    types =[]
    for i in itemTypes:
        names = []
        for j in glob.glob("."+STATIC_URL+"images/item-types/"+i[27:]+"/*"):
            names.append(j[len(i)+1:len(j)-4])
        context[i[27:]] =  names

        types.append(i[27:])

    filenames =  {"context":context,"itemTypes":types}

    #print(context )
    return render(request,'enquire.html',context=filenames)