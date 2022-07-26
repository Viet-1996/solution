# Generated by Django 4.0.6 on 2022-08-04 03:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('solution_page', '0028_rename_name_technologylist_technology'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adviserlink',
            name='title',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='adviserlink', to='solution_page.adviser'),
        ),
        migrations.AlterField(
            model_name='usercount',
            name='name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='usercount', to='solution_page.whylearn'),
        ),
        migrations.CreateModel(
            name='ProjectIcon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(upload_to='images')),
                ('Project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='projecticon', to='solution_page.project')),
            ],
        ),
    ]
