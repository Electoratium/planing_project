from django.contrib import admin
from .models import User as CustomUser
from .models import PlaningDay
from .models import TaskPriorities



class TaskPrioritiesAdmin(admin.ModelAdmin):
	list_display = ['pk', 'name', 'order']
	ordering = ['order']
	class Meta:
		model = TaskPriorities

admin.site.register(TaskPriorities, TaskPrioritiesAdmin)


class PlaningDayAdmin(admin.ModelAdmin):
	list_display = [field.name for field in PlaningDay._meta.get_fields()]

	class Meta:
		model = PlaningDay

admin.site.register(PlaningDay, PlaningDayAdmin)


class CustomUserAdmin(admin.ModelAdmin):
	list_display = ['pk', 'email']

	class Meta:
		model = CustomUser

# admin.site.unregister(User)
admin.site.register(CustomUser, CustomUserAdmin)