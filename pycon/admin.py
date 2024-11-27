from django.contrib import admin
from .models import Sponsor, Speaker

@admin.register(Sponsor)
class SponsorAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'amount')
    list_filter = ('category',)
    search_fields = ('name',)

@admin.register(Speaker)
class SpeakerAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'topic', 'order')
    list_editable = ('order',)
    search_fields = ('name', 'title', 'topic')
    ordering = ('order', 'name')
