# Generated by Django 4.0.6 on 2022-07-25 01:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0005_alter_uploadvid_options_remove_technologylist_img_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='technologylist',
            name='name',
        ),
        migrations.AddField(
            model_name='technology',
            name='list',
            field=models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to='solution_page.technologylist'),
            preserve_default=False,
        ),
    ]
