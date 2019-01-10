from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import login,register,password
from .models import User
from .jwt import gen_token
# import bcrypt
from django.contrib.auth.hashers import check_password
from .permissions import IsAdminUser,IsStaffORAdmin,IsAuthenticated

# Create your views here.

class login(generics.GenericAPIView):
    permission_classes=(AllowAny,)
    serializer_class = login
    def post(self,request,*args,**kwargs):
        serializer=self.get_serializer(data=request.data)
        if serializer.is_valid():
            try:
                user=User.objects.get(username=serializer.data['username'])
                if user:
                    if check_password(serializer.data['password'],user.password):
                        payload={
                            "username":user.username,
                            "role":user.role
                        }
                        token=gen_token(payload)
                        return Response(
                            {
                                "success":True,
                                "token":token,
                                "user":payload
                            },
                            status=200
                        )
                    else:
                        return Response(
                        {
                            "success":False,
                            "message":"User with Credentials DoesNot Exist"
                        },
                        status=status.HTTP_404_NOT_FOUND
                    )

                else:
                    return Response(
                        {
                            "success":False,
                            "message":"User DoesNot Exist"
                        },
                        status=404
                    )
            except User.DoesNotExist:
                return Response(
                        {
                            "success":False,
                            "message":"No user Found"
                        },
                        status=404
                    )
        else:
            return Response(serializer.errors,status=400)
        


class register(generics.CreateAPIView):
    permission_classes=(IsAuthenticated,)
    serializer_class = password
    def create(self,request,*args,**kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                return Response(
                    {
                        "message":serializer.data['username']+" created Successfully"
                    },
                    status=status.HTTP_201_CREATED
                    )
            except ValueError:
                return Response(ValueError)   
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


     
class Password_update(generics.GenericAPIView):
    permission_classes=(IsAuthenticated,)
    serializer_class = password
    def post(self,request,*args,**kwargs):
        serializer=self.get_serializer(data=request.data)
        if serializer.is_valid():
            try:
                user=User.objects.get(username=request.user)
                if user:
                    if check_password(serializer.data['old_password'],user.password):
                        user.password=serializer.data['new_password']
                        user.save()
                        return Response({
                            "message":request.user+"'s Password Updated Succesfully."
                        },status=status.HTTP_202_ACCEPTED)
                    else:
                        return Response(
                            {
                                "message":"Wrong old password."
                            }
                        )
            except User.DoesNotExist:
                return Response({
                            "message":"User DoesNot Exist.Please Login again"
                        },status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST,content_type='application/json')


