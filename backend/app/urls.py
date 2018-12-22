from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('api-token-auth', login, name='login'),
    path('test', test, name='test')
]