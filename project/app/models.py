from django.db import models

# Create your models here.
class Word(models.Model):
    word = models.CharField(max_length=255)

    def __str__(self):
        return self.word
class Definition(models.Model):
    text = models.TextField()
    example = models.TextField()
    word = models.ForeignKey(Word, on_delete=models.CASCADE)

