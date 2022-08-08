import json
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.views import View
from solution_page.forms import UserCreationForm, loginform
from .models import User as MyUser, WhyLearn
from .models import Media as MyMedia
from .models import Adviser, AdviserLogo, Award, Course, LearningPath, Method, Parent, Project, Technology, UploadVid, WhyChooseUs, ModalRegister, Certificate
from django.template import loader
from django.http import HttpResponse 
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth import login as auth_login
from django.http import JsonResponse
from django.contrib.auth import logout as auth_logout

@login_required(login_url='/solution_page/login', redirect_field_name=None)
def index(request):
    myuploadvid = UploadVid.objects.latest()
    myWhyChooseUs = WhyChooseUs.objects.all().order_by('order').values()
    myLearningPath = LearningPath.objects.latest()
    myTechnology = Technology.objects.all()
    myMethod = Method.objects.all().order_by('order').values()
    myAdviser = Adviser.objects.all().order_by('order')
    myAdviserLogo = AdviserLogo.objects.all().order_by('order')
    myAward = Award.objects.all().values().order_by('order')
    myCourse = Course.objects.all().values().order_by('order')
    myProject = Project.objects.all().order_by('order')
    myParent = Parent.objects.all().values().order_by('order')
    myMedia = MyMedia.objects.all().values().order_by('order') 
    myUser = MyUser.objects.all().values().order_by('order')
    myWhylearn = WhyLearn.objects.all().order_by('order')
    myCertificate = Certificate.objects.all().values()
    searchKey = "Bài viết"
    template = loader.get_template('solution_page/index.html')
    context = {
    'myuploadvid': myuploadvid,
    'myWhyChooseUs' : myWhyChooseUs,
    'myLearningPath' : myLearningPath,
    'myTechnology' : myTechnology,
    'myMethod' : myMethod,    
    'myCertificate' : myCertificate,
    'myAdviser' : myAdviser,
    'myAdviserLogo' : myAdviserLogo,
    'myAward' : myAward,
    'myCourse' : myCourse,
    'myProject' : myProject,
    'myParent' : myParent,
    'myMedia' : myMedia,
    'myUser' : myUser,
    'myWhylearn' : myWhylearn,
    'searchKey' : searchKey,
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
        return HttpResponseRedirect('/solution_page')

def login(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('/solution_page')
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None :
            auth_login(request, user)
            return HttpResponseRedirect('/solution_page')
        else:
            messages.error(request,"Sai tên đăng nhập hoặc mật khẩu")
    return render(request, 'solution_page/login.html',context={'form':loginform()})

def course(request):
    myCourse = Course.objects.all().values().order_by('order')
    template = loader.get_template('solution_page/course.html')
    searchKey = "Khóa học"
    if request.method=='POST':
        key = request.POST['keywords']
        myCourse = Course.objects.all().filter(title__icontains = key )
    context = {
    'myCourse' : myCourse,
    'searchKey' : searchKey,
    }
    return HttpResponse(template.render(context, request))


def project(request):
    myProject = Project.objects.all().order_by('order')
    template = loader.get_template('solution_page/project.html')
    searchKey = "Dự án"
    if request.method == "POST":
        key = request.POST['keywords']
        myProject = Project.objects.all().filter(title__icontains = key )
    context = {
        'myProject' : myProject,
        'searchKey' : searchKey,
    }
    return HttpResponse(template.render(context, request))


def register(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('/solution_page')
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            messages.success(request, "Đăng ký thành công")
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(request, username = username, password = password)
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

class StudentnameValiadtionView(View):
    def post(self, request):
        data = json.loads(request.body)
        studentname = data['studentname']  
        if not str(studentname).isalpha():
            return JsonResponse({'studentname_error': 'Họ và tên không được chứa kí tự đặc biệt và chữ số'})
        return JsonResponse({'studentname_valid': True})

def logout(request):
    auth_logout(request)
    return HttpResponseRedirect('/solution_page')