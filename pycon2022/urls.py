from django.urls import path

from .views import (
    HomePageView,
    AboutPageView,
    SpeakPageView,
    SponsorPageView,
    TravelPageView,
    CoCPageView,
    SchedulePageView,
    TicketPageView,
)

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("about/", AboutPageView.as_view(), name="about2022"),
    path("speak/", SpeakPageView.as_view(), name="speak"),
    path("sponsor/", SponsorPageView.as_view(), name="sponsor2022"),
    path("travel-guide/", TravelPageView.as_view(), name="travel"),
    path("coc/", CoCPageView.as_view(), name="coc2022"),
    path("schedule/", SchedulePageView.as_view(), name="schedule"),
    path("ticket/", TicketPageView.as_view(), name="ticket"),
]
