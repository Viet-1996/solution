# Generated by Django 4.0.6 on 2022-08-02 08:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0024_usercount'),
    ]

    operations = [
        migrations.AddField(
            model_name='whylearn',
            name='count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='whylearn',
            name='subdes',
            field=models.CharField(default='1', max_length=100),
            preserve_default=False,
        ),
    ]
