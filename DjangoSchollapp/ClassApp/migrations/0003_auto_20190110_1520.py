# Generated by Django 2.1.4 on 2019-01-10 09:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ClassApp', '0002_subjectmodel_teacher'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subjectmodel',
            name='teacher',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='Teacher.Teacher'),
        ),
    ]
