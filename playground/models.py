from django.db import models

    
class Rate(models.Model):
    name = models.CharField(max_length=40)
    value = models.FloatField()

    def __str__(self):
        return self.name
    
