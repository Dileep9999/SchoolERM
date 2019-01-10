# Generated by Django 2.1.4 on 2018-12-27 08:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '__first__'),
        ('ClassApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Marks',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('MarksObtained', models.IntegerField()),
                ('TotalMarks', models.IntegerField()),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='ClassApp.SubjectModel')),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=90)),
                ('email', models.EmailField(blank=True, max_length=254)),
                ('phone', models.IntegerField(blank=True, null=True)),
                ('FirstName', models.CharField(max_length=90)),
                ('LastName', models.CharField(max_length=90)),
                ('DOB', models.DateField(blank=True)),
                ('createdAt', models.DateTimeField(auto_now=True)),
                ('FatherName', models.CharField(blank=True, max_length=90)),
                ('MotherName', models.CharField(blank=True, max_length=90)),
                ('BooldGroup', models.CharField(blank=True, choices=[('O+', 'O Positve'), ('O-', 'O Negetive'), ('B+', 'B Postive'), ('B-', 'B Negetive'), ('A+', 'A Postive'), ('A-', 'A Negetive'), ('AB-', 'AB Negetive'), ('AB+', 'AB Postive')], max_length=18)),
                ('is_active', models.BooleanField(default=True)),
                ('is_passedout', models.BooleanField(default=False)),
                ('roll_number', models.CharField(max_length=20, unique=True)),
                ('image_path', models.CharField(blank=True, max_length=200)),
                ('User', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='user.User')),
                ('className', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ClassApp.ClassModel')),
            ],
        ),
        migrations.CreateModel(
            name='StudentAttendence',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('present', models.BooleanField()),
                ('added_by', models.CharField(max_length=180)),
                ('createdAt', models.DateTimeField(auto_now=True)),
                ('Date', models.DateField(auto_now=True, unique=True)),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Student.Student')),
            ],
        ),
        migrations.CreateModel(
            name='StudentMarks',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_by', models.CharField(max_length=180)),
                ('createdAt', models.DateTimeField(auto_now=True)),
                ('ExamType', models.CharField(max_length=100, unique=True)),
                ('percentage', models.IntegerField()),
                ('marks', models.ManyToManyField(to='Student.Marks')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='Student.Student')),
            ],
        ),
    ]