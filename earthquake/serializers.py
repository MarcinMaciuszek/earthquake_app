from rest_framework import serializers
from .models import Earthquake

class Serializer(serializers.ModelSerializer):
	class Meta: 
		fields = (
	    	'id',
			'tsu', 				
			'name', 				
			'latitude', 			
			'longitude', 			
			'focal', 				
			'magnitude', 			
			'num_deaths', 			
			'num_injured', 		
			'mill_damages', 		
			'num_houses_dest', 	
			'num_houses_dam', 		
			'date', 				
			'yyyymmdd', 			
			'x', 					
			'y' 					
		)
		model = Earthquake
