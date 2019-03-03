from rest_framework import serializers
from .models import (DayTasks, User)



# class TestSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = DayTasks
# 		fields = ['taskName', 'expirationTime', 'priority', 'owner']



# Можно сериализировать отдельные поля
# class DayTasksSerializer(serializers.ModelSerializer):
#   taskName = TestSerialiser()
# 	class Meta:
# 		model = DayTasks
# 		fields = ['taskName', 'expirationTime', 'priority', 'owner']


class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ['id', 'email']


class DayTasksSerializer(serializers.ModelSerializer):
	priority = serializers.ReadOnlyField(source='priority.name')

	class Meta:
		model = DayTasks
		fields = ['id', 'taskName','expirationTime', 'priority', 'owner']