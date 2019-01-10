from django.shortcuts import render

from .models import Staff
from rest_framework import generics,status
from .serializer import StaffSerializer


# Create your views here.


class Add_Staff(generics.ListCreateAPIView):
    queryset=Staff.objects.all()
    serializer_class=StaffSerializer

class Update_satff(generics.RetrieveUpdateDestroyAPIView):
    queryset=Staff.objects.all()
    serializer_class=StaffSerializer    


