from django.db import models
from Student.models import Student
from user.models import User

# Create your models here.
class Fee(models.Model):
    PAIDBY=(
       ("S","Student"),
       ("P","Parent"),
       ("O","Others")
    )

    Total=models.IntegerField()
    PaidAmount=models.IntegerField()
    ReciptNumber=models.CharField(max_length=70,unique=True)
    student=models.ForeignKey(Student,on_delete=models.PROTECT)
    added_by=models.ForeignKey(User,on_delete=models.PROTECT)
    createdAt=models.DateTimeField(auto_now_add=True)
    PaidBy=models.CharField(max_length=30,choices=PAIDBY)

    
    def __str__(self):
        return self.student.name

    
