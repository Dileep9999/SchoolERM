from django.db import models
from Teacher.models import Teacher


class SubjectModel(models.Model):
     class Media:
        css={
            'all':('static/admin/css/base2.css',)
        }

     code=models.CharField(max_length=10)
     name=models.CharField(max_length=20)
     decription=models.TextField(null=True,blank=True)
     teacher=models.ForeignKey(Teacher,on_delete=models.PROTECT,null=True,blank=True)
        
     def __str__(self):
         return "{}({})".format(self.name,self.code)
    
    

class ClassModel(models.Model): 
     className=models.CharField(max_length=90,primary_key=True)
     subjects=models.ManyToManyField(SubjectModel)

     def __str__(self):
         return self.className



