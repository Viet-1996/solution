# Generated by Django 4.0.6 on 2022-07-25 03:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0008_rename_methods_method'),
    ]

    operations = [
        migrations.AddField(
            model_name='method',
            name='img',
            field=models.ImageField(default='1', upload_to='images'),
            preserve_default=False,
        ),
    ]