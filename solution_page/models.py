from distutils.command.upload import upload
from tkinter import CASCADE
from turtle import position
from typing import List
from unicodedata import name
from django.db import models
from django.forms import CharField
from django.core.validators import MaxValueValidator, MinValueValidator
from tinymce import models as tinymce_models

class UploadVid(models.Model):
    title = models.CharField(max_length=200)
    url = models.CharField(max_length=200)
    img = models.ImageField(upload_to='images')
    quote = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    class Meta:
        get_latest_by = ['title', 'url', 'img', 'quote', 'name']

class WhyChooseUs(models.Model):
    title  = models.CharField(max_length=200)
    content = models.CharField(max_length=200)
    img = models.ImageField(upload_to='images')

class LearningPath(models.Model):
    img = models.ImageField(upload_to='images')
    class Meta:
        get_latest_by = ['img']

class Technology(models.Model):
    name = models.CharField(max_length=200)
    img = models.ImageField(upload_to='images')
    def __str__(self):
        return self.name

class TechnologyList(models.Model):
    technology = models.ForeignKey(Technology, on_delete=models.CASCADE, related_name = 'technologylist')
    content = models.CharField(max_length=200) 
    def __str__(self):
        return self.content 

class Method(models.Model):
    name = models.CharField(max_length=200)
    content = tinymce_models.HTMLField()
    img = models.ImageField(upload_to='images')
    order = models.IntegerField(
        default=0,
        )

class Adviser(models.Model):
    title = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    img = models.ImageField(upload_to='images')

class AdviserLink(models.Model):
    title = models.ForeignKey(Adviser, on_delete=models.CASCADE, related_name='adviserlink')
    url = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='images')

class AdviserLogo(models.Model):
    description = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='images')

class Certificate(models.Model):
    titlename = tinymce_models.HTMLField()
    title = tinymce_models.HTMLField()
    img = models.ImageField(upload_to='images')
    point = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(100),
            MinValueValidator(0),
        ])
    maincontent = tinymce_models.HTMLField()
    intro = tinymce_models.HTMLField()
    subcontent = tinymce_models.HTMLField()
    logo = models.ImageField(upload_to='images')

class Award(models.Model):
    img = models.ImageField(upload_to='images')
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    Detail = models.CharField(max_length=200)

class Course(models.Model):
    img = models.ImageField(upload_to='images')
    price = models.IntegerField(default=0)
    title = models.CharField(max_length=200)
    vote = models.IntegerField(default=0)
    rating = models.FloatField(
        default=0,
        validators=[
            MaxValueValidator(5.0),
            MinValueValidator(0),
        ])

class Project(models.Model):
    title = models.CharField(max_length=200)
    img = models.ImageField(upload_to='images')
    usercount = models.IntegerField(
        default=0,
    )

class Parent(models.Model):
    name = models.CharField(max_length=200)
    avatar = models.ImageField(upload_to='images')
    studentname = models.CharField(max_length=200)
    content = models.CharField(max_length=200)

class Media(models.Model):
    img = models.ImageField(upload_to='images')
    logo = models.ImageField(upload_to='images')
    title = models.CharField(max_length=200)

class WhyLearn(models.Model):
    thumb = models.ImageField(upload_to='images')
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    rating = models.FloatField(default=0)
    subdes = models.CharField(max_length=100)
    count = models.IntegerField(
        default = 0,
    )
    discount = models.IntegerField(
        default = 0,
    )

class UserCount(models.Model):
    name = models.ForeignKey(WhyLearn, on_delete=models.CASCADE, related_name='usercount')
    img = models.ImageField(upload_to='images')

class User(models.Model):
    img = models.ImageField(upload_to='images')

class ModalRegister(models.Model):
    student_name = models.CharField(max_length=100)
    date_of_birth = models.SmallIntegerField(
        default=2010,
        validators=[
            MaxValueValidator(2016),
            MinValueValidator(2010),
        ])
    parent_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=50)
    phone_number = models.CharField(max_length=20)
