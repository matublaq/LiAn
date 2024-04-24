from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('dashboard_new', views.new_dashboard, name='new_dashboard'), 
]