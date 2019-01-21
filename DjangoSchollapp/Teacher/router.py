from django.urls import path
from . import views

urlpatterns=[
    path('add',views.Add_Teacher.as_view(),name='Add'),
    
]
