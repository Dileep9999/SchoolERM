from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from user.permissions import IsAdminUser
from .serializers import StudentSerilaizer,StudentAttendaceSerializer
from .models import Student

# Create your views here.
class AddStudents(generics.CreateAPIView):
    # permission_classes=IsAdminUser
    serializer_class=StudentSerilaizer
    def create(self,request,*args,**kwargs):
        if len(request.data):
            errors=[]
            for i in range(len(request.data)):
                serializer = self.get_serializer(data=request.data[i])
                if serializer.is_valid():
                    serializer.save()
                    # return Response(serializer.data)
                else:
                    # return Response(serializer.errors)
                    errors.append({"Number":i,
                    "errors":serializer.errors})
            if len(errors):
                return Response(errors)
            else:
                return Response({"message":"Succedss"})
        else:
            return Response({"message":"send mulitple"})


class get_Students_byClass(generics.ListAPIView):
    # queryset = Student.objects.filter(className=id)
    serializer_class = StudentSerilaizer
    paginate_by = 10
    def get_queryset(self):
        try:
            class_id = self.kwargs['className']
            queryset = self.serializer_class.Meta.model.objects.filter(className=class_id)
            return queryset.order_by('-name')[int(self.kwargs['from']):int(self.kwargs['to'])]
        except:
            return queryset


class Student_Update(generics.UpdateAPIView):
    queryset=Student.objects.all()
    lookup_field='id'
    serializer_class=StudentSerilaizer

class Add_Student_Attendace(generics.CreateAPIView):
    serializer_class=StudentAttendaceSerializer
    def create(self,request,*args,**kwargs):
        if len(request.data):
            errors=[]
            for i in range(len(request.data)):
                print(request.data[i])
                serializer = self.get_serializer(data=request.data[i])
                if serializer.is_valid():
                    if not serializer.data['present']:
                        serializer.save()
                    # return Response(serializer.data)
                else:
                    # return Response(serializer.errors)
                    errors.append({"Number":i,
                    "errors":serializer.errors})
            if len(errors):
                return Response(errors)
            else:
                return Response({"message":"Success"})
        else:
            return Response({"message":"send mulitple"})
