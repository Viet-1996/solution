from dataclasses import fields
from email.quoprimime import quote
from tkinter.tix import IMAGE
from turtle import title
from django.contrib import admin

from .models import Adviser, AdviserLink, AdviserLogo, Award, Certificate, Course, Media, Method, ModalRegister, Parent, Project, TechnologyList, UploadVid, User, WhyChooseUs, LearningPath, Technology, WhyLearn

class UploadVidAdmin(admin.ModelAdmin):
    list_display = ['title', 'url', 'img', 'quote', 'name']
    list_per_page = 10

class WhyChooseUsAdmin(admin.ModelAdmin):
    list_display = ['title', 'content', 'img']
    list_per_page = 10

class LearningPathAdmin(admin.ModelAdmin):
    list_display = ['img']
    list_per_page = 10

class TechnologyInline(admin.TabularInline):
    model = TechnologyList
    extra = 10

class TechnologyAdmin(admin.ModelAdmin):
    list_display = ['name', 'img']
    fieldsets = [
        (None,               {'fields': ['name']}),
        (None,               {'fields': ['img']})
    ]
    inlines = [TechnologyInline]

class MethodAdmin(admin.ModelAdmin):
    list_display = ['name']

class AdviserLinkInLine(admin.TabularInline):
    model = AdviserLink
    extra = 3

class AdviserAdmin(admin.ModelAdmin):
    list_display = ['title', 'position', 'img']
    fieldsets = [
        (None,      {'fields': ['title']}),
        (None,      {'fields': ['position']}),
        (None,      {'fields': ['img']}),
    ]
    inlines = [AdviserLinkInLine]

class AdviserLogoAdmin(admin.ModelAdmin):
    list_display = ['description', 'logo']

class CertificateAdmin(admin.ModelAdmin):
    list_display = ['titlename', 'title', 'img', 'point', 'maincontent', 'logo'] 

class AwardAdmin(admin.ModelAdmin):
    list_display = ['img', 'title', 'description', 'Detail']

class CourseAdmin(admin.ModelAdmin):
    list_display = ['img', 'price', 'title', 'vote', 'rating']

class ModalRegisterAdmin(admin.ModelAdmin):
    list_display = ['student_name', 'date_of_birth', 'parent_name', 'email']

class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title']

class ParentAdmin(admin.ModelAdmin):
    list_display = ['name', 'studentname', 'content']

class MediaAdmin(admin.ModelAdmin):
    list_display = ['title']

class UserAdmin(admin.ModelAdmin):
    list_display = ['img']

admin.site.register(UploadVid, UploadVidAdmin)
admin.site.register(Adviser, AdviserAdmin)
admin.site.register(Award, AwardAdmin)
admin.site.register(AdviserLogo, AdviserLogoAdmin)
admin.site.register(Certificate, CertificateAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(Media, MediaAdmin)
admin.site.register(Method, MethodAdmin)
admin.site.register(Parent, ParentAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Technology, TechnologyAdmin)
admin.site.register(WhyChooseUs, WhyChooseUsAdmin)
admin.site.register(User, UserAdmin)
admin.site.register(LearningPath, LearningPathAdmin)
admin.site.register(ModalRegister, ModalRegisterAdmin)