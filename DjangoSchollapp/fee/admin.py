from django.contrib import admin

# Register your models here.
from .models import Fee

admin.site.register([Fee])
