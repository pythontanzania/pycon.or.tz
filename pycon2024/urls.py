from django.urls import path

from .views import (
    HomePageView,
    CoCPageView,
    SponsorPageView,
)

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("coc/", CoCPageView.as_view(), name="coc"),
    path("sponsor/", SponsorPageView.as_view(), name="sponsor"),
]
