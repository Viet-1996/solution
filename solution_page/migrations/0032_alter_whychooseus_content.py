# Generated by Django 4.0.6 on 2022-08-04 07:00

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0031_alter_uploadvid_table'),
    ]

    operations = [
        migrations.AlterField(
            model_name='whychooseus',
            name='content',
            field=tinymce.models.HTMLField(),
        ),
    ]