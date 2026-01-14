from django.shortcuts import render
from .models import Sponsor, SponsorCategory, Speaker


# Create your views here.
def HomePageView(request):
    sponsors_by_category = {}
    for category in SponsorCategory.choices:
        category_name = category[0]
        sponsors = Sponsor.objects.filter(category=category_name)
        sponsors_by_category[category_name] = sponsors

    context = {"sponsors_by_category": sponsors_by_category}
    return render(request, "pycon/home.html", context)


def SpeakPageView(request):
    return render(request, "pycon/speak.html")


def SpeakerPageView(request):
    speakers = Speaker.objects.all()
    return render(request, "pycon/speakers.html", {"speakers": speakers})


def CocPageview(request):
    return render(request, "pycon/coc.html")


def SchedulePageView(request):
    return render(request, "pycon/schedule.html")


def Pycon2022PageView(request):
    return render(request, "pycon/past/2022.html")


def SponsorPageView(request):
    sponsors_by_category = {}
    for category in SponsorCategory.choices:
        category_name = category[0]
        sponsors = Sponsor.objects.filter(category=category_name)
        sponsors_by_category[category_name] = sponsors

    context = {"sponsors_by_category": sponsors_by_category}
    return render(request, "pycon/sponsor.html", context)
