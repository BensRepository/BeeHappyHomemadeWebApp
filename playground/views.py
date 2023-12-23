from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View
from django.http import JsonResponse
import requests
import glob
import json
from BeeHappyHomemadeProject.settings import STATIC_URL
from BeeHappyHomemadeProject.settings import EMAIL_HOST_USER
from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
# Create your views here.


def post(request):
    if(request.headers.get('X-Requested-With')== 'XMLHttpRequest'):
        body = json.loads(request.body)
        full_name = body['javascript_info']['name']
        email = body['javascript_info']['email']
        phone = body['javascript_info']['phone']
        message= body['javascript_info']['message']
        
        send_mail("New Enquirey!🐝 - "+full_name,#subject
                  "The backend has detected the following form submission, please manage appropriately 😊:"+"\n \n"+"Full Name: " +  
                  full_name + "\n"  + "Email Address: " + email + "\n" +"Phone Number: "+ phone + "\n"  +"Message: " +
                    message+ "\n \n" +"Many thanks!" +"\n"+"Automated Message🤖 ",#message
                  'settings.EMAIL_HOST_USER',#sender,
                  [EMAIL_HOST_USER],#reciever
                  fail_silently=False
                  )
        send_mail("Bee Happy Homemade Enquiry🐝 - Confirmation",#subject
                  "Hey! "+"\n \n"+ "Thank you for your intrest! 😊 - We will aim to respond to your enquirey within 48 Hours:"+ 
                  "\n \n"  +"'"+ message +"'" +  "\n \n" +"Many Thanks" +" \n"+ "The Bee Happy Homemade Team 🐝"+"\n" +
                  "www.beehappyhomemade.com"+"\n"+"enquiries@beehappyhomemade.com",#message
                  'settings.EMAIL_HOST_USER',#sender,
                  [email],#reciever
                  fail_silently=False
                  )

        return JsonResponse({'view-information':"view"})

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

def postList(request):
    print("Test")
    if(request.headers.get('X-Requested-With')== 'XMLHttpRequest'):
        body = json.loads(request.body)
        full_name = body['javascript_info']['name']
        email = body['javascript_info']['email']
        phone = body['javascript_info']['phone']
        message= body['javascript_info']['message']
        items= body['javascript_info']['items']
        total = body['javascript_info']['total']
       
        item_table = "Name/Design/Quantity/Price"
        
        if isinstance(items[0], list):
            for i in items:
                item_table += "\n" + str(i[0])  +"  "+ str(i[1]) +"  " + "x"+str(i[2])  +"  "+"£"+str(i[3])
        else:
            item_table += "\n" + str(items[0])  +"  "+ str(items[1]) +"  " + "x"+str(items[2])  +"  "+"£"+str(items[3])

        send_mail("New Enquirey!🐝 - "+full_name,#subject
                  "The backend has detected the following form submission, please manage appropriately 😊:"+"\n \n"+"Full Name: " +  
                  full_name + "\n"  + "Email Address: " + email + "\n" +"Phone Number: "+ phone + "\n"  +"Message: " +
                    message+ "\n \n"+"Craft Enquire List: \n\n" +item_table+"\n \n"+total+"\n \n" +"Many thanks!" +"\n"+"Automated Message🤖 "+"",#message
                  'settings.EMAIL_HOST_USER',#sender,
                  [EMAIL_HOST_USER],#reciever
                  fail_silently=False
                  )
        send_mail("Bee Happy Homemade Enquiry - Confirmation🐝",#subject
                  "Hey! "+"\n \n"+
                   "Thank you for your intrest! 😊 - We will aim to respond to your enquirey within 48 Hours:"+ 
                  "\n \n" + "'"+message +"'"+
                  "\n \n"+  "Craft Enquire List:"+ "\n\n" +item_table+"\n \n"+total + 
                    "\n \n" +"Many Thanks" +" \n"+ "The Bee Happy Homemade Team 🐝"+"\n" +
                  "www.beehappyhomemade.com"+"\n"+"enquiries@beehappyhomemade.com",#message
                  'settings.EMAIL_HOST_USER',#sender,
                  [email],#reciever
                  fail_silently=False
                  )

        return JsonResponse({'view-information':"view"})