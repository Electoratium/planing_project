from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *

urlpatterns = [
	path('create-user', createUser),
	path('check-token', checkToken),
	path('api-token-auth', login),
	path('planing/day-tasks/', day_tasks_list),
	path('planing/day-tasks/<int:pk>/', day_task_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)