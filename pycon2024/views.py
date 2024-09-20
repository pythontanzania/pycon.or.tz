from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.
class HomePageView(TemplateView):
    template_name = "pycon2024/home.html"

class CoCPageView(TemplateView):
    template_name = "pycon2024/coc.html"