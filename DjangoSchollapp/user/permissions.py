from rest_framework import permissions
from .jwt import decode
from rest_framework.exceptions import PermissionDenied
from .models import User
from django.utils import timezone
import datetime

class IsAuthenticated(permissions.BasePermission):
    def has_permission(self,request,view):
        try:
            token=request.META['HTTP_AUTHORIZATION']
            username=decode(token) 
            user=User.objects.get(username=username)
            if user:
                request.user=user.id
                return True  
        except User.DoesNotExist:
             raise PermissionDenied({"message":"Your is Not Authoraised to do this action."})
        except KeyError:
             raise PermissionDenied({"message":"No/Wrong Authentication credentials were provided."})


class IsAdminUser(permissions.BasePermission):
    def has_permission(self, request, view):
        try:
            token=request.META['HTTP_AUTHORIZATION']
            username=decode(token) 
            user=User.objects.get(username=username,role='ADMIN')
            if user:
                # user.LastActivity=datetime.datetime.now()
                # print(str(user.LastActivity))
                # user.save()
                request.user=user.id
                return True  
        except User.DoesNotExist:
             raise PermissionDenied({"message":"Your is Not Authoraised to do this action."})
        except KeyError or ValueError or TypeError:
             raise PermissionDenied({"message":"No/Wrong Authentication credentials were provided."})
       

class IsStaffORAdmin(permissions.BasePermission):
    def has_permission(self,request,view):
        try:
            token=request.META['HTTP_AUTHORIZATION']
            username=decode(token) 
            user=User.objects.get(username=username)
            if user:
                if user.role==('ADMIN' or 'STAFF'): 
                    request.user=user.id
                    return True
                else:
                    raise PermissionDenied({"message":"User is Not Authoraised to do this action."})
        except User.DoesNotExist:
             raise PermissionDenied({"message":"Your is Not Authoraised to do this action."})
        except KeyError:
              raise PermissionDenied({"message":"No/Wrong Authentication credentials were provided."})


class IsTeacherORAdmin(permissions.BasePermission):
    def has_permission(self,request,view):
        try:
            token=request.META['HTTP_AUTHORIZATION']
            username=decode(token) 
            user=User.objects.get(username=username)
            if user:
                if user.role==('ADMIN' or 'TEACHER'): 
                    request.user=user.id
                    return True
                else:
                    raise PermissionDenied({"message":"User is Not Authoraised to do this action."})
        except User.DoesNotExist:
              raise PermissionDenied({"message":"Your is Not Authoraised to do this action."})
        except KeyError:
              raise PermissionDenied({"message":"No/Wrong Authentication credentials were provided."})

