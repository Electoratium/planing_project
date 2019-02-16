from rest_framework import serializers
from .models import DayTasks

class DayTasksSerializer(serializers.ModelSerializer):
	class Meta:
		model = DayTasks
		fields = ['taskName', 'expirationTime', 'priority', 'owner']