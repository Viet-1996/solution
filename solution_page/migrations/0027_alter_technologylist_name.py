# Generated by Django 4.0.6 on 2022-08-03 03:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0026_whylearn_discount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='technologylist',
            name='name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='technologylist', to='solution_page.technology'),
        ),
    ]
