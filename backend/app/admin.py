from django.contrib import admin
from .models import User as CustomUser
from .models import DayTasks
from .models import TaskPriorities



class TaskPrioritiesAdmin(admin.ModelAdmin):
	list_display = ['pk', 'name', 'order']
	class Meta:
		model = TaskPriorities

admin.site.register(TaskPriorities, TaskPrioritiesAdmin)


class PlaningDayAdmin(admin.ModelAdmin):
	list_display = [field.name for field in DayTasks._meta.get_fields()]

	class Meta:
		model = DayTasks

admin.site.register(DayTasks, PlaningDayAdmin)


class CustomUserAdmin(admin.ModelAdmin):
	list_display = ['pk', 'email']

	class Meta:
		model = CustomUser

# admin.site.unregister(User)
admin.site.register(CustomUser, CustomUserAdmin)