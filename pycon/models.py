from django.db import models

# Create your models here.
class SponsorCategory(models.TextChoices):
    GOLD = 'gold'
    SILVER = 'silver'
    BRONZE = 'bronze'
    LIFETIME = 'lifetime'

class Sponsor(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='sponsor_logos')
    category = models.CharField(
        max_length=20,
        choices=SponsorCategory.choices,
        default=SponsorCategory.BRONZE
    )
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return self.name

class Speaker(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    topic = models.CharField(max_length=200)
    image = models.ImageField(upload_to='speaker_images')
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return self.name
