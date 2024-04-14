from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('newdashboard', views.new_dashboard, name='new_dashboard'), 
]