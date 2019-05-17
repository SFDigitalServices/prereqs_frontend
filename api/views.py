from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.template import loader
import requests
import json
import jsend
import os


def users(request):
    usersResourceUrl = os.environ.get('PREREQS_SERVICE_URL') + '/users'
    if request.method == 'GET':
        response = requests.get(usersResourceUrl)
    elif request.method == 'POST':
        postParams = json.loads(request.body)
        response = requests.post(usersResourceUrl, json=postParams)

    if response.status_code >= 300:
        return JsonResponse(jsend.error(response.text))
    
    return JsonResponse(json.loads(response.text), safe=False)

def user(request, id):
    userResourceUrl = os.environ.get('PREREQS_SERVICE_URL') + '/users/' + id
    if request.method == 'DELETE':
        response = requests.delete(userResourceUrl)
        return JsonResponse(jsend.success({'message': id + ' succesfully deleted'}))