# Generated by Django 4.0.6 on 2022-08-12 01:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0048_alter_technology_options_remove_technology_order_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='method',
            options={'ordering': ['my_order'], 'verbose_name_plural': 'Phương pháp sư phạm'},
        ),
        migrations.AlterModelOptions(
            name='technologylist',
            options={'ordering': ['my_order']},
        ),
        migrations.RemoveField(
            model_name='method',
            name='order',
        ),
        migrations.AddField(
            model_name='method',
            name='my_order',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='technologylist',
            name='my_order',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
