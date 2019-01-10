from django.contrib import admin
from .models import SubjectModel,ClassModel

# Register your models here.
# admin.site.register([SubjectModel])

@admin.register(ClassModel)
class ClassModelAdmin(admin.ModelAdmin):
    list_display=('className',)
    
@admin.register(SubjectModel)
class SubjectModelAdmin(admin.ModelAdmin):
    list_display=('code','name','teacherName')

    def teacherName(self,o):
        if not o.teacher:
            return "Not assigned"
        return o.teacher.name
    
    list_filter=('teacher__name',)
    search_fields=('name','code')
    
    