# Generated by Django 4.0.6 on 2022-08-01 06:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0017_loginuser_registeruser_alter_media_logo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='title',
        ),
    ]
