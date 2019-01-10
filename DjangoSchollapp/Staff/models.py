from django.db import models
from user.models import User
from django.utils import timezone

# Create your models here.
def image_path(instance,name):
    return '/'.join(['staff','instance.id'+'_'+'name'])

class Staff(models.Model):
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

    name=models.CharField(max_length=180)
    FirstName=models.CharField(max_length=90)
    LastName=models.CharField(max_length=90)
    User=models.OneToOneField(User,on_delete=models.CASCADE,null=True,blank=True)
    DOB=models.DateField(null=True,blank=True)
    Phone=models.PositiveIntegerField(blank=True)
    createdAt=models.DateField(auto_now=True)
    Image=models.ImageField(upload_to=image_path,blank=True)
    BloodGroup=models.CharField(choices=BOOLDGROUPS,blank=True,max_length=13)
    FatherName=models.CharField(max_length=181,blank=True)
    MotherName=models.CharField(max_length=181,blank=True)
    Address=models.TextField(blank=True)

    def __str__(self):
        return self.name
