# Generated by Django 4.0.6 on 2022-07-26 01:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0010_alter_certificate_point'),
    ]

    operations = [
        migrations.AddField(
            model_name='adviserlink',
            name='logo',
            field=models.ImageField(default='1', upload_to='images'),
            preserve_default=False,
        ),
    ]