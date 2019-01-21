from django.contrib import admin

# Register your models here.
from .models import Student,StudentMarks,StudentAttendance,Marks

# admin.site.register([Student,StudentMarks,StudentAttendence,Marks])
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    search_fields = ['FirstName', 'LastName', 'email']
    list_display = ('name','FirstName','LastName','className')
    list_filter = ('className',)

admin.site.register(StudentAttendance)
