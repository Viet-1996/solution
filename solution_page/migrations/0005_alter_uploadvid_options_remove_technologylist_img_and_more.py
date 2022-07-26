# Generated by Django 4.0.6 on 2022-07-25 01:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0004_alter_learningpath_options_technologylist_img_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='uploadvid',
            options={'get_latest_by': ['title', 'url', 'img', 'quote', 'name']},
        ),
        migrations.RemoveField(
            model_name='technologylist',
            name='img',
        ),
        migrations.AddField(
            model_name='technology',
            name='img',
            field=models.ImageField(default='a', upload_to='images'),
            preserve_default=False,
        ),
    ]
