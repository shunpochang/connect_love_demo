from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Comment(models.Model):
    """Comment data model"""
    comment_author = models.CharField(max_length=200)
    comment_text = models.CharField(max_length=300)
    comment_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return ' '.join([self.comment_author, 'from', self.comment_text])
