# Generated by Django 4.0.6 on 2022-07-28 04:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0013_alter_course_rating'),
    ]

    operations = [
        migrations.CreateModel(
            name='ModalRegister',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('student_name', models.CharField(max_length=100)),
                ('date_of_birth', models.DateField()),
                ('parent_name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=50)),
                ('phone_number', models.CharField(max_length=20)),
            ],
        ),
    ]
