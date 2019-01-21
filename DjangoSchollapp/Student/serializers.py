from rest_framework import serializers
from .models import Student,StudentAttendance
from rest_framework.validators import UniqueValidator

class StudentSerilaizer(serializers.ModelSerializer):
    # User=serializers.RelatedField(source='User.username',read_only=True)
    # className=serializers.RelatedField(source='ClassName.name',read_only=True)
    class Meta:
        model=Student
        fields=('id','name','roll_number','Image','className','FirstName','LastName','user')
    

class StudentAttendaceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=StudentAttendance
        fields='__all__'
                # custom_error_messages_for_validators = {
        #     'Date':{
        #         UniqueValidator:"Attendence Already took"
        #     }
        # }
        # validators = [
        #     serializers.UniqueTogetherValidator(
        #         queryset=StudentAttendence.objects.all(),
        #         fields=('student', 'Date'),
        #         message="Attendence Already taken."
        #     )
        # ]
