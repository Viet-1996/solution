from django.urls import include, path
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from .views import StudentnameValiadtionView, UsernameValidationView
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('', views.index, name='index'),
    # path('modalregister/', views.modalregister, name='modalregister'),
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('validate-username', csrf_exempt(UsernameValidationView.as_view()), name='validate-username'),
    path('logout/', views.logout, name='logout'),
    path('tinymce/', include('tinymce.urls')),
    path('validate-studentname', csrf_exempt(StudentnameValiadtionView.as_view()), name='validate-studentname'),
    path('course/', views.course, name='course'),
    path('project/', views.project, name='project'),
    path('send_email/', views.send_email, name='send_email')
]

# urlpatterns += staticfiles_urlpatterns()
# urlpatterns += [
#     path('accounts/', include('django.contrib.auth.urls')),
# ]