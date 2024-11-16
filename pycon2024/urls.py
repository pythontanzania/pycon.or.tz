from django.urls import path

from .views import (
    HomePageView,
    CoCPageView,
    SponsorPageView,
    SchedulePageView,
    SpeakPageView,
    SpeakerListView,
)

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("coc/", CoCPageView.as_view(), name="coc"),
    path("sponsor/", SponsorPageView.as_view(), name="sponsor"),
    path("schedule/", SchedulePageView.as_view(), name="schedule"),
    path("speak/", SpeakPageView.as_view(), name="speak"),
    path("speakers/", SpeakerListView.as_view(), name="speakers"),
]
