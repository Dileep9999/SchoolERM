from django.urls import path,include
from . import views

urlpatterns = [
    path('login',views.login.as_view()),
    path('register',views.register.as_view()),
    path('passwordchange',views.Password_update.as_view())
]
