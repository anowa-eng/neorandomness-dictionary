from rest_framework import serializers
from .models import *

class WordSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Word

class DefinitionSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Definition
