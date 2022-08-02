from email import message
from hashlib import new
import json
from msilib.schema import Media
from multiprocessing import AuthenticationError
from pipes import Template
from re import template
from urllib import request
from xml.dom import UserDataHandler
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import redirect, render
from django.urls import is_valid_path, reverse
from django.views import View
from django.views.generic import TemplateView
from solution_page.forms import UserCreationForm, loginform
from .models import User as MyUser
from .models import Media as MyMedia
from .models import Adviser, AdviserLink, AdviserLogo, Award, Course, LearningPath, Method, Parent, Project, Technology, TechnologyList, UploadVid, WhyChooseUs, ModalRegister
from django.template import loader
from django.http import HttpResponse 
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate
from django.contrib.auth.models import User, auth
from django.contrib.auth import login as auth_login
from django.http import JsonResponse
from django.contrib.auth import logout as auth_logout

@login_required(login_url='/solution_page/login', redirect_field_name=None)
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
    myCourse = Course.objects.all().values()
    myProject = Project.objects.all().values()
    myParent = Parent.objects.all().values()
    myMedia = MyMedia.objects.all().values()    
    myUser = MyUser.objects.all().values()
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
    'myAward' : myAward,
    'myCourse' : myCourse,
    'myProject' : myProject,
    'myParent' : myParent,
    'myMedia' : myMedia,
    'myUser' : myUser,
    }
    return HttpResponse(template.render(context, request))

def modalregister(request):
    if request.method == "POST":
        studentname = request.POST['student_name']
        dateofbirth = request.POST['date_of_birth']
        parentname = request.POST['parent_name']
        email = request.POST['email']
        phonenumber = request.POST['phone_number']
        member = ModalRegister(student_name=studentname, date_of_birth=dateofbirth, parent_name=parentname, email=email, phone_number=phonenumber)
        member.save()
        messages.success(request, 'Đăng ký thành công')
        return HttpResponseRedirect('./')

def login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None :
            auth_login(request, user)
            return HttpResponseRedirect('./')
        else:
            messages.error(request,"Sai tên đăng nhập hoặc mật khẩu")
    return render(request, 'solution_page/login.html',context={'form':loginform()})

def register(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            messages.success(request, "Đăng ký thành công")
            auth_login(request, user)
            return HttpResponseRedirect('./')
        messages.error(request, "Tên đăng nhập hoặc mật khẩu không hợp lệ")
    return render(request, 'solution_page/register.html', context={'form':UserCreationForm()})

class UsernameValidationView(View):
    def post(self, request):
        data = json.loads(request.body)
        username = data['username']  
        if User.objects.filter(username = username).exists():
            return JsonResponse({'username_error':'Tên đăng nhập đã được sử dụng'})
        return JsonResponse({'username_valid': True})

def logout(request):
    auth_logout(request)
    return HttpResponseRedirect('./')