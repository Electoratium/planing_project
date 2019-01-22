from django.contrib import admin
from .models import User as CustomUser
# from django.contrib.auth.models import User

from django.conf import settings

class CustomUserAdmin(admin.ModelAdmin):
	list_display = ['pk', 'email']

	class Meta:
		model = CustomUser

# admin.site.unregister(User)
admin.site.register(CustomUser, CustomUserAdmin)