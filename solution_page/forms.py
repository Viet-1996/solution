from pyexpat import model
from django import forms
from django.contrib.auth.models import User
from django.forms import ModelForm 


class loginform(ModelForm):
    class Meta:
        model = User
        fields = ('username', 'password')
        widgets = {
            'username' : forms.TextInput(attrs= {'class' : 'form-control c-placeholder-login'}),
            'password' : forms.PasswordInput(attrs={'class' : 'form-control c-placeholder-login'})
        }

    
class UserCreationForm(forms.Form):
   username = forms.CharField(max_length=50, widget=forms.TextInput(attrs= {'class' : 'form-control c-placeholder-login'}))
   password1 = forms.CharField(max_length=50, widget=forms.PasswordInput(attrs={'class' : 'form-control c-placeholder-login'}))
   password2 = forms.CharField(max_length=50, widget=forms.PasswordInput(attrs={'class' : 'form-control c-placeholder-login'}))
   email = forms.EmailField(widget = forms.EmailInput(attrs= {'class' : 'form-control c-placeholder-login'} ))
   def clean(self):
    cleaned_data = super(UserCreationForm, self).clean()
    password = cleaned_data.get("password1")
    confirm_password = cleaned_data.get("password2")
    if password != confirm_password:
        self.add_error('password2', "Nhập lại mật khẩu không khớp")
   def save(self):
        User.objects.create_user(username = self.cleaned_data['username'], password = self.cleaned_data['password1'], email = self.cleaned_data['email'])