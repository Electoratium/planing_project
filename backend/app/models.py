from django.db import models

from .managers import UserManager

from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import ugettext_lazy as _
from .managers import TestManager

class User(AbstractBaseUser, PermissionsMixin):
	email = models.EmailField('email', unique=True, null=True)
	is_staff = models.BooleanField(
		_('staff status'),
		default=False,
		help_text=_('Designates whether the user can log into this site.'),
	)
	is_active = models.BooleanField(
		_('active'),
		default=True,
		help_text=_(
			'Designates whether this user should be treated as active. '
			'Unselect this instead of deleting accounts.'
		),
	)
	USERNAME_FIELD = 'email'
	objects = UserManager()


	class Meta:
		verbose_name = 'Пользователь'
		verbose_name_plural = 'Пользователи'

	def __str__(self):
		return self.email

	def get_full_name(self):
		return self.email

	def get_short_name(self):
		return self.email


class TaskPriorities(models.Model):
	name = models.CharField('Приоритет', max_length=128)
	order = models.IntegerField('Порядок', unique=True)
	# test = TestManager()

	class Meta:
		verbose_name = 'Приоритет'
		verbose_name_plural = 'Приоритеты'

	def __str__(self):
		return self.name

class PlaningDay(models.Model):
	taskName = models.CharField('Задача', max_length=200)
	expirationTime = models.DateTimeField('Время задачи', auto_now_add=False ,auto_now=False)
	priority = models.ForeignKey(TaskPriorities, verbose_name='Приоритет', null=False, on_delete=models.SET_DEFAULT, default=1)
	owner = models.ForeignKey(User, verbose_name='Пользователь', null=False, on_delete=models.CASCADE)

	class Meta:
		verbose_name = 'Задача на день'
		verbose_name_plural = 'Задачи на день'

	def __str__(self):
		return "Задача %s" % self.pk