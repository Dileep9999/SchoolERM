from rest_framework import serializers
from .models import User

class login(serializers.Serializer):
    username=serializers.CharField(max_length=90)
    password=serializers.CharField(max_length=90)

class register(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('username','password','role')
        # read_only_fields = ('CreatedAt','LastActivity')
        extra_kwargs = {'password': {'write_only': True}}
    def create(self, validated_data):
        user = User(
            role=validated_data['role'],
            username=validated_data['username'],
            password=validated_data['password']
        )
        
        user.save()
        return user

class password(serializers.Serializer):
    old_password=serializers.CharField(max_length=100)
    new_password=serializers.CharField(max_length=50)
