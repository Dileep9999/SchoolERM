from .models import Fee
from rest_framework import serializers

class FeeSerializer(serializers.ModelSerializer):

    class Meta:
        model=Fee
        Fee=('__all__')
        
