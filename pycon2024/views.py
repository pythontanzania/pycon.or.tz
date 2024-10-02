from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.
class HomePageView(TemplateView):
    template_name = "pycon2024/home.html"

class CoCPageView(TemplateView):
    template_name = "pycon2024/coc.html"
    
class SponsorPageView(TemplateView):
    template_name = "pycon2024/sponsor.html"

class SchedulePageView(TemplateView):
    template_name = "pycon2024/schedule.html"

class SpeakPageView(TemplateView):
    template_name = "pycon2024/speak.html"