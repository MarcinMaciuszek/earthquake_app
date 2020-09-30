from django.db import models

# Create your models here.
class Earthquake(models.Model):
    id 					= models.IntegerField(primary_key=True)
    tsu 				= models.CharField(max_length=255, blank=True, null=True)
    name 				= models.CharField(max_length=255)
    latitude 			= models.FloatField(blank=True, null=True)
    longitude 			= models.FloatField(blank=True, null=True)
    focal 				= models.FloatField(blank=True, null=True)
    magnitude 			= models.FloatField(blank=True, null=True)
    num_deaths 			= models.IntegerField(blank=True, null=True)
    num_injured 		= models.IntegerField(blank=True, null=True)
    mill_damages 		= models.FloatField(blank=True, null=True)
    num_houses_dest 	= models.IntegerField(blank=True, null=True)
    num_houses_dam 		= models.IntegerField(blank=True, null=True)
    date 				= models.CharField(max_length=20)
    yyyymmdd 			= models.CharField(max_length=8)
    x 					= models.FloatField()
    y 					= models.FloatField()
