from django.urls import path

from .views import (
    HomePageView,
    AboutPageView,
    SpeakPageView,
    SponsorPageView,
    CovidPageView,
    CoCPageView,
    SchedulePageView,
    TicketPageView,
)

urlpatterns = [
    path("", HomePageView.as_view(), name="home2019"),
    path("about/", AboutPageView.as_view(), name="about2019"),
    path("speak/", SpeakPageView.as_view(), name="speak2019"),
    path("sponsor/", SponsorPageView.as_view(), name="sponsor2019"),
    path("covid-19/", CovidPageView.as_view(), name="covid2019"),
    path("coc/", CoCPageView.as_view(), name="coc2019"),
    path("schedule/", SchedulePageView.as_view(), name="schedule2019"),
    path("ticket/", TicketPageView.as_view(), name="ticket2019"),
]
