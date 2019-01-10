from django.shortcuts import render

from rest_framework import generics,status
from .models import Teacher
from .Serializer import TeacherSerializer

class Add_Teacher(generics.ListCreateAPIView):
    queryset=Teacher.objects.all()
    serializer_class=TeacherSerializer
    


# Create your views here.
