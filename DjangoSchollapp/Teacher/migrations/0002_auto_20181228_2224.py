# Generated by Django 2.1.4 on 2018-12-28 16:54

import Teacher.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Teacher', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='teacher',
            name='image_path',
        ),
        migrations.AddField(
            model_name='teacher',
            name='Image',
            field=models.ImageField(blank=True, upload_to=Teacher.models.image_path),
        ),
    ]