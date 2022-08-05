from django.contrib import admin

from .models import Adviser, AdviserLink, AdviserLogo, Award, Certificate, Course, Media, Method, ModalRegister, Parent, Project, ProjectIcon, TechnologyList, UploadVid, User, UserIcon, WhyChooseUs, LearningPath, Technology, WhyLearn

class UploadVidAdmin(admin.ModelAdmin):
    list_display = ['title', 'url', 'quote', 'name']
    list_per_page = 10

class WhyChooseUsAdmin(admin.ModelAdmin):
    list_display = ['title', 'content', 'order']
    list_per_page = 10

class LearningPathAdmin(admin.ModelAdmin):
    list_display = ['img']
    list_per_page = 10

class TechnologyInline(admin.TabularInline):
    model = TechnologyList
    extra = 10

class TechnologyAdmin(admin.ModelAdmin):
    list_display = ['name', 'order']
    fieldsets = [
        (None,               {'fields': ['name']}),
        (None,               {'fields': ['img']}),
        (None,               {'fields': ['order']})
    ]
    inlines = [TechnologyInline]

class MethodAdmin(admin.ModelAdmin):
    list_display = ['name', 'order']

class AdviserLinkInLine(admin.TabularInline):
    model = AdviserLink
    extra = 3

class AdviserAdmin(admin.ModelAdmin):
    list_display = ['title', 'position', 'order']
    fieldsets = [
        (None,      {'fields': ['title']}),
        (None,      {'fields': ['position']}),
        (None,      {'fields': ['img']}),
        (None,      {'fields': ['order']}),
    ]
    inlines = [AdviserLinkInLine]

class AdviserLogoAdmin(admin.ModelAdmin):
    list_display = ['description', 'order']

class CertificateAdmin(admin.ModelAdmin):
    list_display = ['titlename', 'title', 'img', 'point', 'maincontent', 'logo'] 

class AwardAdmin(admin.ModelAdmin):
    list_display = ['img', 'title', 'description', 'Detail']

class CourseAdmin(admin.ModelAdmin):
    list_display = ['title', 'img', 'price', 'vote', 'rating']

class ModalRegisterAdmin(admin.ModelAdmin):
    list_display = ['student_name', 'date_of_birth', 'parent_name', 'email']

class ProjectIconInLine(admin.TabularInline):
    model = ProjectIcon
    extra = 3

class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'order']
    fieldsets = [
        (None,      {'fields': ['title']}),
        (None,      {'fields': ['img']}),
        (None,      {'fields': ['usercount']}),
        (None,      {'fields': ['order']}),
    ]
    inlines = [ProjectIconInLine]

class ParentAdmin(admin.ModelAdmin):
    list_display = ['name', 'studentname', 'content', 'order']

class MediaAdmin(admin.ModelAdmin):
    list_display = ['title']

class UserAdmin(admin.ModelAdmin):
    list_display = ['order', 'img']

class UserCountInline(admin.TabularInline):
    model = UserIcon
    extra = 5

class WhylearnAdmin(admin.ModelAdmin):
    list_display = ['title', 'thumb', 'description', 'rating', 'subdes', 'count', 'discount']
    fieldsets = [
        (None,      {'fields': ['title']}),
        (None,      {'fields': ['thumb']}),
        (None,      {'fields': ['description']}),
        (None,      {'fields': ['subdes']}),
        (None,      {'fields': ['count']}),
        (None,      {'fields': ['discount']}),
        (None,      {'fields': ['rating']}),
        (None,      {'fields': ['order']}),
    ]
    inlines = [UserCountInline]

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
admin.site.register(WhyLearn, WhylearnAdmin)