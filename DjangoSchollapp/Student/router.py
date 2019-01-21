from django.urls import path,include
from . import views

urlpatterns = [
    path('add',views.AddStudents.as_view()),
    path('get/<className>/<from>/<to>',views.get_Students_byClass.as_view()),
    path('get/<className>',views.get_Students_byClass.as_view()),
    path('update/<id>',views.Student_Update.as_view()),
    path('att_add',views.Add_Student_Attendace.as_view())
]

