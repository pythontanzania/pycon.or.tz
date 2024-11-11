from django.shortcuts import render
from .models import Sponsor, SponsorCategory
# Create your views here.
def HomePageView(request):
    sponsors_by_category = {}
    for category in SponsorCategory.choices:
        category_name = category[0]
        sponsors = Sponsor.objects.filter(category=category_name)
        sponsors_by_category[category_name] = sponsors

    context = {
        'sponsors_by_category': sponsors_by_category
    }
    return render(request, "pycon/home.html", context)

def SpeakPageView(request):
    return render(request, "pycon/speak.html")

def CocPageview(request):
    return render(request, "pycon/coc.html") 

def SponsorPageView(request):
    sponsors_by_category = {}
    for category in SponsorCategory.choices:
        category_name = category[0]
        sponsors = Sponsor.objects.filter(category=category_name)
        sponsors_by_category[category_name] = sponsors

    context = {
        'sponsors_by_category': sponsors_by_category
    }
    return render(request, "pycon/sponsor.html", context)