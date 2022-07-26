# Generated by Django 4.0.6 on 2022-08-12 02:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0049_alter_method_options_alter_technologylist_options_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='adviser',
            options={'ordering': ['my_order'], 'verbose_name_plural': 'Đội ngũ cố vấn'},
        ),
        migrations.AlterModelOptions(
            name='adviserlink',
            options={'ordering': ['my_order']},
        ),
        migrations.RemoveField(
            model_name='adviser',
            name='order',
        ),
        migrations.AddField(
            model_name='adviser',
            name='my_order',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='adviserlink',
            name='my_order',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
