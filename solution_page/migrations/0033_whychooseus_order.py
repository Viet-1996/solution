# Generated by Django 4.0.6 on 2022-08-04 07:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0032_alter_whychooseus_content'),
    ]

    operations = [
        migrations.AddField(
            model_name='whychooseus',
            name='order',
            field=models.IntegerField(default=0),
        ),
    ]
