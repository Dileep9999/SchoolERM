from django.db import models
from user.models import User
# Create your models here.
from django.utils import timezone
import os


def image_path(instance,name):
    image_path = '/'.join(['teacher','add',str(instance.id)+'.'+str(name.split('.')[-1])])
    try:
        os.popen("rm %s" % str(image_path))
    except e:
        print(e)
    return image_path

class Experience(models.Model):
    institute=models.CharField(max_length=200)
    years=models.IntegerField()

class Teacher(models.Model):
    BOOLDGROUPS=(
        ("O+","O Positve"),
        ("O-","O Negetive"),
        ("B+","B Postive"),
        ("B-","B Negetive"),
        ("A+","A Postive"),
        ("A-","A Negetive"),
        ("AB+","AB Postive"),
        ("AB-","AB Negetive"),
    )

    name=models.CharField(max_length=181)
    FirstName=models.CharField(max_length=90)
    LastName=models.CharField(max_length=90)
    PhoneNumber=models.IntegerField(unique=True)
    User=models.OneToOneField(User,on_delete=models.CASCADE,blank=True,null=True)
    DOB=models.DateField(blank=True)
    Experience=models.ManyToManyField(Experience,blank=True)
    createdAt=models.DateField(auto_now_add=True)
    Image=models.ImageField(upload_to=image_path,blank=True)
    BloodGroup=models.CharField(choices=BOOLDGROUPS,blank=True,max_length=13)
    FatherName=models.CharField(max_length=181,blank=True)
    MotherName=models.CharField(max_length=181,blank=True)
    Address=models.TextField(blank=True)

    def __str__(self):
        return self.name


class Teacher_Attendance(models.Model):
    status=(
        ('A','Absent'),
        ('CL','Casual Leave'),
        ('SL','Sick Leave'),
        ('O','Other')
    )
    Date=models.DateField()
    createdAt=models.DateTimeField(auto_now_add=True)
    Added_By=models.OneToOneField(User,on_delete=models.CASCADE,blank=True,null=True)
    Status=models.CharField(choices=status,max_length=20)

    # def __str__(self):
    #     return self.Date

class Teacher_Leave(models.Model):
    FromDate=models.DateField()
    ToDate=models.DateField()
    Approved=models.BooleanField(default=False)
    Teacher=models.ForeignKey(Teacher,on_delete=models.PROTECT)
    Approver=models.ForeignKey(User,on_delete=models.PROTECT)

    def __str__(self):
        return self.Teacher.name

# class Teacher_Time_Tabel(models.Model):



