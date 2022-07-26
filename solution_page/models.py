from distutils.command.upload import upload
from tkinter import CASCADE
from typing import List
from unicodedata import name
from django.db import models
from django.forms import CharField
from django.core.validators import MaxValueValidator, MinValueValidator

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
"""     @property
    def context(self):
        content = TechnologyList.objects.filter(name, self.name)
        return content """

class TechnologyList(models.Model):
    name = models.ForeignKey(Technology, on_delete=models.CASCADE)
    content = models.CharField(max_length=200) 

class Method(models.Model):
    name = models.CharField(max_length=200)
    content = models.CharField(max_length=200)
    img = models.ImageField(upload_to='images')

class Adviser(models.Model):
    title = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    img = models.ImageField(upload_to='images')

class AdviserLink(models.Model):
    title = models.ForeignKey(Adviser, on_delete=models.CASCADE)
    url = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='images')

class AdviserLogo(models.Model):
    description = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='images')

class Certificate(models.Model):
    titlename = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    img = models.ImageField(upload_to='images')
    point = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(100),
            MinValueValidator(0),
        ])
    maincontent = models.CharField(max_length=200)
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

class Parent(models.Model):
    name = models.CharField(max_length=200)
    avatar = models.ImageField(upload_to='images')
    studentname = models.CharField(max_length=200)
    content = models.CharField(max_length=200)

class Media(models.Model):
    img = models.ImageField(upload_to='images')
    logo = models.CharField(max_length=200)
    title = models.CharField(max_length=200)

class WhyLearn(models.Model):
    thumb = models.ImageField(upload_to='images')
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    rating = models.FloatField(default=0)

class User(models.Model):
    title = models.ForeignKey(WhyLearn, on_delete=models.CASCADE)
    img = models.ImageField(upload_to='images')