# Generated by Django 4.0.6 on 2022-08-05 07:53

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0035_rename_usercount_usericon'),
    ]

    operations = [
        migrations.AddField(
            model_name='whylearn',
            name='vote',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='whylearn',
            name='rating',
            field=models.FloatField(default=0, validators=[django.core.validators.MaxValueValidator(5.0), django.core.validators.MinValueValidator(0)]),
        ),
    ]
