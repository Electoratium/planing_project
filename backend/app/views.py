from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.status import (
	HTTP_500_INTERNAL_SERVER_ERROR,
	HTTP_400_BAD_REQUEST,
	HTTP_404_NOT_FOUND,
	HTTP_422_UNPROCESSABLE_ENTITY,
	HTTP_204_NO_CONTENT,
	HTTP_201_CREATED,
	HTTP_200_OK
)
from . import models

from rest_framework.response import Response

from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404


from . import serializers
from rest_framework.response import Response
from rest_framework.parsers import JSONParser


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def checkToken(request):
	userToken = request.data.get("token")

	userData = get_object_or_404(Token, key=userToken)

	response = {
		# 'userId': userData.user.pk,
		'email': userData.user.email,
	}

	return Response(response, status=HTTP_200_OK)


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
	email = request.data.get("email")
	password = request.data.get("password")
	if email is None or password is None:
		return Response({'error': 'Please provide both username and password'}, status=HTTP_400_BAD_REQUEST)
	user = authenticate(email=email, password=password)
	if not user:
		return Response({'error': 'Invalid Credentials'}, status=HTTP_404_NOT_FOUND)
	token, _ = Token.objects.get_or_create(user=user)
	return Response({'token': token.key}, status=HTTP_200_OK)

@csrf_exempt
@api_view(['GET', 'POST'])

# DELETE IT!!!!!
@permission_classes((AllowAny,))
def day_tasks_list(request, format=None):
	if request.method == 'GET':
		user_id = request.POST['user_id']

		if not user_id:
			return Response(status=HTTP_422_UNPROCESSABLE_ENTITY)

		user_tasks = models.DayTasks.objects.all().filter(owner__id=user_id).only('taskName', 'expirationTime', 'priority__name')
		serializer = serializers.DayTasksSerializer(user_tasks, many=True)

		return Response(serializer.data)

	elif request.method == 'POST':
		data = JSONParser().parse(request)
		serializer = serializers.DayTasksSerializer(data=data)

		if serializer.is_valid():
			serializer.save()

			return Response(serializer.data, status=HTTP_201_CREATED)
		return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


	# filter('owner', userId).all()




	# return Response(user_tasks_json, status=HTTP_200_OK)



@csrf_exempt
@api_view(['GET', 'POST', 'DELETE'])
@permission_classes((AllowAny, ))
def day_task_detail(request, pk, format=None):
	try:
		task = models.DayTasks.objects.get(pk=pk)
	except models.DayTasks.DoesNotExist:
		return Response(status=HTTP_404_NOT_FOUND)

	if request.method == 'GET':
		serializer = serializers.DayTasksSerializer(task)
		return Response(serializer.data)

	elif request.method == 'PUT':
		data = JSONParser().parse(request)
		serializer = serializers.DayTasksSerializer(task, data=data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

	elif request.method == 'DELETE':
		task.delete()
		return Response(status=HTTP_204_NO_CONTENT)


@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def createUser(request):
	email = request.data.get('email')
	password = request.data.get('password')

	if not email or not password:
		return Response('Invalid credentials', status=HTTP_400_BAD_REQUEST)

	try:
		newUser = get_user_model().objects.create_user(email, password)
		newUser.save()

		return Response(status=HTTP_200_OK)
	except:
		return Response('Error on creating user', status=HTTP_500_INTERNAL_SERVER_ERROR)
