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
	HTTP_200_OK
)
from . import models

from rest_framework.response import Response

from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404


from django.core import serializers



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
@api_view(["GET"])

# DELETE IT!!!!!
@permission_classes((AllowAny,))
def get_day_tasks(request):
	user_id = request.POST['user_id']

	if not user_id:
		return Response(status=HTTP_422_UNPROCESSABLE_ENTITY)

	# filter('owner', userId).all()
	user_tasks = models.PlaningDay.objects.all().filter(owner__id=user_id).only('taskName', 'expirationTime', 'priority__name')

	user_tasks_json = serializers.serialize('json', user_tasks)

	return Response(user_tasks_json, status=HTTP_200_OK)








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
