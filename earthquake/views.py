from django.shortcuts import render

from rest_framework import generics
from .models import Earthquake
from .serializers import Serializer

class List(generics.ListCreateAPIView):
	queryset = Earthquake.objects.all()
	serializer_class = Serializer

class Detail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Earthquake.objects.all()
	serializer_class = Serializer