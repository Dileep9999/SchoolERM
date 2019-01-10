from django.shortcuts import render
from .serializer import FeeSerializer
from rest_framework import generics
from rest_framework.response import Response
from user.permissions import IsAdminUser
from rest_framework import status
from .models import Fee
# Create your views here.

class Add_fee(generics.CreateAPIView):
    serializer_class=FeeSerializer
    def post(self,request,**args,**kwargs):
        serilizer=self.get_serilizer(data=request.data)
        if serilizer.is_valid():
            serilizer.save()
            return Response(
                {
                    "message":serilizer.data['ReciptNumber']+" of student"+serilizer.data['student'].name+" created." 
                },
                status=status.HTTP_201_CREATED
                )
        else:
            return Response(serilizer.errors,status=status.HTTP_400_BAD_REQUEST)

class get_fee(generics.RetrieveUpdateDestroyAPIView):
    queryset=Fee.objects.all()
    serializer_class=FeeSerializer
