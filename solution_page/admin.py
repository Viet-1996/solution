from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
from adminsortable2.admin import SortableTabularInline
from .models import Adviser, AdviserLink, AdviserLogo, Award, Certificate, Color, Course, Media, Method, ModalRegister, NameIcon, Parent, Project, ProjectIcon, TechnologyList, UploadVid, User, UserIcon, WhyChooseUs, LearningPath, Technology, WhyLearn

class UploadVidAdmin(admin.ModelAdmin):
    fields = ['title', 'url', 'quote', 'name', 'img', 'admin_photo']
    list_display = ['title', 'url', 'quote', 'name', 'admin_photo']
    readonly_fields = ['admin_photo',]
    list_per_page = 5

@admin.register(WhyChooseUs)
class WhyChooseUsAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['title', 'admin_content', 'my_order']
    readonly_fields = ['admin_photo',]
    list_per_page = 5

class LearningPathAdmin(admin.ModelAdmin):
    fields = ['img', 'admin_photo', 'my_order']
    list_display = ['admin_photo']
    readonly_fields = ['admin_photo',]
    list_per_page = 5

class TechnologyInline(SortableTabularInline):
    model = TechnologyList
    extra = 10

class TechnologyAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['name', 'admin_photo', 'my_order']
    fieldsets = [
        (None,               {'fields': ['name']}),
        (None,               {'fields': ['img']}),
        (None,               {'fields': ['admin_photo']}),
    ]
    readonly_fields = ['admin_photo',]
    inlines = [TechnologyInline]
    list_per_page = 5

class MethodAdmin(SortableAdminMixin, admin.ModelAdmin):
    fields = ['name', 'content', 'img', 'admin_photo']
    list_display = ['name', 'admin_photo', 'my_order']
    readonly_fields = ['admin_photo',]
    list_per_page = 5

class AdviserLinkInLine(SortableTabularInline):
    model = AdviserLink
    extra = 3

class AdviserAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['title', 'position', 'admin_photo', 'my_order']
    fieldsets = [
        (None,      {'fields': ['title']}),
        (None,      {'fields': ['position']}),
        (None,      {'fields': ['img']}),
        (None,      {'fields': ['admin_photo']}),
    ]
    readonly_fields = ['admin_photo',]
    inlines = [AdviserLinkInLine]
    list_per_page = 5

class AdviserLogoAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['description', 'admin_photo', 'my_order']
    fields = ['description', 'logo', 'admin_photo']
    readonly_fields = ['admin_photo',]
    list_per_page = 5

class CertificateAdmin(admin.ModelAdmin):
    list_display = ['admin_titlename', 'admin_title',  'admin_img', 'point', 'admin_maincontent', 'admin_logo']
    fields = ['titlename', 'title', 'img', 'admin_img', 'point', 'maincontent', 'logo', 'admin_logo', 'intro', 'subcontent'] 
    readonly_fields = ['admin_img','admin_logo']
    list_per_page = 5

class AwardAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['admin_photo', 'title', 'description', 'Detail', 'my_order']
    fields = ['img','admin_photo', 'title', 'description', 'Detail']
    readonly_fields = ['admin_photo',]
    list_per_page = 5

class CourseAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['title', 'admin_photo', 'price', 'vote', 'rating', 'my_order']
    fields = ['title', 'img', 'admin_photo', 'price', 'vote', 'rating']
    readonly_fields = ['admin_photo',]
    list_per_page = 5

class ModalRegisterAdmin(admin.ModelAdmin):
    list_display = ['student_name', 'date_of_birth', 'parent_name', 'email']

class ProjectIconInLine(SortableTabularInline):
    model = ProjectIcon
    extra = 3

class ProjectAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['title', 'admin_photo', 'my_order']
    fieldsets = [
        (None,      {'fields': ['title']}),
        (None,      {'fields': ['img']}),
        (None,      {'fields': ['admin_photo']}),
        (None,      {'fields': ['usercount']}),
    ]
    readonly_fields = ['admin_photo',]
    inlines = [ProjectIconInLine]
    list_per_page = 5

class NameIconAdmin(admin.ModelAdmin):
    list_display = ['name']

class ParentAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['name', 'studentname', 'content', 'admin_photo', 'my_order']
    fields = ['name', 'studentname', 'content', 'avatar', 'admin_photo']
    readonly_fields = ['admin_photo',]
    list_per_page = 5

class MediaAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['title', 'admin_logo', 'admin_img', 'my_order']
    fields = ['title' , 'logo','admin_logo', 'img' ,'admin_img']
    readonly_fields = ['admin_logo','admin_img']

class UserAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['admin_photo', 'my_order']
    fields = ['img', 'admin_photo']
    readonly_fields = ['admin_photo']
    list_per_page = 5

class UserCountInline(SortableTabularInline):
    model = UserIcon
    readonly_fields = ['admin_photo']
    extra = 5

class WhylearnAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['title', 'admin_photo', 'description', 'rating', 'subdes', 'count', 'discount', 'my_order']
    fieldsets = [
        (None,      {'fields': ['title']}),
        (None,      {'fields': ['thumb']}),
        (None,      {'fields': ['admin_photo']}),
        (None,      {'fields': ['description']}),
        (None,      {'fields': ['subdes']}),
        (None,      {'fields': ['count']}),
        (None,      {'fields': ['discount']}),
        (None,      {'fields': ['rating']}),
        (None,      {'fields': ['vote']}),
        (None,      {'fields': ['color']}),
    ]
    readonly_fields = ['admin_photo']
    inlines = [UserCountInline]
    list_per_page = 5


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
admin.site.register(User, UserAdmin)
admin.site.register(LearningPath, LearningPathAdmin)
admin.site.register(ModalRegister, ModalRegisterAdmin)
admin.site.register(WhyLearn, WhylearnAdmin)
admin.site.register(NameIcon, NameIconAdmin)
admin.site.register(Color)