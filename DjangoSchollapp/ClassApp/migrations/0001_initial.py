# Generated by Django 2.1.4 on 2018-12-27 08:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ClassModel',
            fields=[
                ('className', models.CharField(max_length=90, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='SubjectModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=10)),
                ('name', models.CharField(max_length=20)),
                ('decription', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='classmodel',
            name='subjects',
            field=models.ManyToManyField(to='ClassApp.SubjectModel'),
        ),
    ]
