from django.urls import path
from . import views

urlpatterns = [
    path("", views.HomePageView, name="home"),
    path("speak/", views.SpeakPageView, name="speak"),
    path("coc/", views.CocPageview, name="coc"),
    path("sponsor/", views.SponsorPageView, name="sponsor"),
    path("schedule/", views.SchedulePageView, name="schedule"),
    path("2022/", views.Pycon2022PageView, name="2022"),
    path("speakers/", views.SpeakerPageView, name="speakers"),
]
