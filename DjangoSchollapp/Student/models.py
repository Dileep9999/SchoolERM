from django.db import models
from user.models import User
from django.utils import timezone
from ClassApp.models import SubjectModel ,ClassModel
from user.models import User
import os
# Create your models here.
def images_path(instance,name):
    return '/'.join(['student',str(instance.id),str(os.path.splitext(name))])

class Student(models.Model):
    BOOLDGROUPS=(
        ("O+","O Positve"),
        ("O-","O Negetive"),
        ("B+","B Postive"),
        ("B-","B Negetive"),
        ("A+","A Postive"),
        ("A-","A Negetive"),
        ("AB-","AB Negetive"),
        ("AB+","AB Postive")
    )


    name=models.CharField(max_length=90)
    User=models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True)
    className=models.ForeignKey(ClassModel,on_delete=models.CASCADE)
    email=models.EmailField(blank=True)
    phone=models.IntegerField(blank=True,null=True)
    FirstName=models.CharField(max_length=90)
    LastName=models.CharField(max_length=90)
    DOB=models.DateField(blank=True,null=True)
    createdAt=models.DateTimeField(auto_now=True)
    FatherName=models.CharField(max_length=90,blank=True)
    MotherName=models.CharField(max_length=90,blank=True)
    BooldGroup=models.CharField(max_length=18,choices=BOOLDGROUPS,blank=True)
    is_active=models.BooleanField(default=True)
    roll_number=models.CharField(max_length=20,unique=True)
    Image=models.ImageField(upload_to=images_path,blank=True)

    def __str__(self):
        return "{}({})".format(self.name,self.className)

class StudentAttendence(models.Model):
    student=models.ForeignKey(Student,on_delete=models.CASCADE)
    present=models.BooleanField()
    added_by=models.CharField(max_length=180)
    createdAt=models.DateTimeField(auto_now=True)
    Date=models.DateField(unique=True,auto_now=True)

    class Meta:
        unique_together = ('student', 'Date',)

    def __str__(self):
        return self.student


class Marks(models.Model):
    subject=models.ForeignKey(SubjectModel,on_delete=models.PROTECT)
    MarksObtained=models.IntegerField()
    TotalMarks=models.IntegerField()

    
class StudentMarks(models.Model):
    student=models.ForeignKey(Student,on_delete=models.PROTECT)
    added_by=models.CharField(max_length=180)
    createdAt=models.DateTimeField(auto_now=True)
    marks=models.ManyToManyField(Marks)
    ExamType=models.CharField(max_length=100,unique=True)
    percentage=models.IntegerField()

    def __str__(self):
        return self.student



    
