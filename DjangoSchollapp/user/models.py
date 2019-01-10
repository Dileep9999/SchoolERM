from django.db import models
import bcrypt
from datetime import datetime
from django.contrib.auth.hashers import make_password,check_password
from django.utils import timezone
# Create your models here.

class User(models.Model):
    ROLES=(
        ('STUDENT','Student'),
        ('STAFF','Staff'),
        ('ADMIN','Admin'),
        ('PARENT','Parent'),
        ('TEACHER','Teacher')
    )
    
    username=models.CharField(max_length=90,unique=True)
    password=models.CharField(max_length=400)
    role=models.CharField(max_length=30,choices=ROLES)
    CreatedAt=models.DateTimeField(auto_now=True)
    # LastActivity=models.DateTimeField(blank=True,null=True)

    def __str__(self):
        return self.username

    def save(self):
        # self.password=(bcrypt.hashpw(self.password.encode(), bcrypt.gensalt(14))).decode()
        self.password=make_password(self.password)
        super(User,self).save()


