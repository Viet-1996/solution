# Generated by Django 4.0.6 on 2022-08-03 07:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0027_alter_technologylist_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='technologylist',
            old_name='name',
            new_name='technology',
        ),
    ]
