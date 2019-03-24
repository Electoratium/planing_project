from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *

urlpatterns = [
	path('user', UserList.as_view()),
	path('check-token', CheckTokenView.as_view()),
	path('api-token-auth', LoginView.as_view()),
	path('planing/day-tasks', DayTaskListView.as_view()),
	path('planing/day-tasks/<int:pk>', DayTaskDetailView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)