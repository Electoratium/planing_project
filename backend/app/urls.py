from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *

urlpatterns = [
	path('user/', UserList.as_view()),
	path('check-token', checkToken),
	path('api-token-auth', login),
	path('planing/day-tasks/', DayTaskList.as_view()),
	path('planing/day-tasks/<int:pk>/', DayTaskDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)