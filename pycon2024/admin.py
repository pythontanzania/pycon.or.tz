from django.contrib import admin
from .models import Speaker


@admin.register(Speaker)
class SpeakerAdmin(admin.ModelAdmin):
    list_display = ("name", "talk_title", "created_at")
    search_fields = ("name", "talk_title", "bio")
    list_filter = ("created_at",)
