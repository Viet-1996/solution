# Generated by Django 4.0.6 on 2022-07-26 02:48

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0012_certificate_logo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='rating',
            field=models.FloatField(default=0, validators=[django.core.validators.MaxValueValidator(5.0), django.core.validators.MinValueValidator(0)]),
        ),
    ]