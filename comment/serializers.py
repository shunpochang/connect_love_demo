from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='comment_author')
    text = serializers.CharField(source='comment_text')
    ds = serializers.DateTimeField(format='%Y-%m-%d', source='comment_date')
    class Meta:
        model = Comment
	fields = ('id', 'author', 'text', 'ds')
