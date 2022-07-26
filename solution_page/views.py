from re import template
from django.http import HttpResponse
from django.shortcuts import render
from django.views import generic
from .models import Adviser, AdviserLink, AdviserLogo, Award, LearningPath, Method, Technology, TechnologyList, UploadVid, WhyChooseUs
from django.template import loader
from django.http import HttpResponse

def index(request):
    myuploadvid = UploadVid.objects.latest()
    myWhyChooseUs = WhyChooseUs.objects.all().values()
    myLearningPath = LearningPath.objects.latest()
    myTechnology = Technology.objects.all().values()
    myTechnologyList = TechnologyList.objects.all()
    myMethod = Method.objects.all().values()
    myAdviser = Adviser.objects.all().values()
    myAdviserLink = AdviserLink.objects.all()
    myAdviserLogo = AdviserLogo.objects.all()
    myAward = Award.objects.all().values()
    template = loader.get_template('solution_page/index.html')
    context = {
    'myuploadvid': myuploadvid,
    'myWhyChooseUs' : myWhyChooseUs,
    'myLearningPath' : myLearningPath,
    'myTechnology' : myTechnology,
    'myTechnologyList' : myTechnologyList,
    'myMethod' : myMethod,
    'myAdviser' : myAdviser,
    'myAdviserLink' : myAdviserLink,
    'myAdviserLogo' : myAdviserLogo,
    'myAward' : myAward
    }
    return HttpResponse(template.render(context, request))