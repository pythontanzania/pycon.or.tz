from django.urls import path

from .views import (
    HomePageView,
    AboutPageView,
    SpeakPageView,
    SponsorPageView,
    CovidPageView,
    CoCPageView,
    SchedulePageView,
)

urlpatterns = [
    path("", HomePageView.as_view(), name="home2020"),
    path("about/", AboutPageView.as_view(), name="about2020"),
    path("speak/", SpeakPageView.as_view(), name="speak2020"),
    path("sponsor/", SponsorPageView.as_view(), name="sponsor2020"),
    path("covid-19/", CovidPageView.as_view(), name="covid2020"),
    path("coc/", CoCPageView.as_view(), name="coc2020"),
    path("schedule/", SchedulePageView.as_view(), name="schedule2020"),
]
