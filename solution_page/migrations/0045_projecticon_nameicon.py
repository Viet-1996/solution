# Generated by Django 4.0.6 on 2022-08-09 02:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0044_remove_projecticon_nameicon'),
    ]

    operations = [
        migrations.AddField(
            model_name='projecticon',
            name='NameIcon',
            field=models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, related_name='nameicon', to='solution_page.nameicon'),
            preserve_default=False,
        ),
    ]
