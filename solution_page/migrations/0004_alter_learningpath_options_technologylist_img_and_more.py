# Generated by Django 4.0.6 on 2022-07-25 01:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0003_alter_adviser_img_alter_adviserlogo_logo_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='learningpath',
            options={'get_latest_by': ['img']},
        ),
        migrations.AddField(
            model_name='technologylist',
            name='img',
            field=models.ImageField(default='', upload_to='images'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='uploadvid',
            name='name',
            field=models.CharField(default='a', max_length=200),
            preserve_default=False,
        ),
    ]
