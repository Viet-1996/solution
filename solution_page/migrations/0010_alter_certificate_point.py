# Generated by Django 4.0.6 on 2022-07-26 01:27

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0009_method_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='certificate',
            name='point',
            field=models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)]),
        ),
    ]
