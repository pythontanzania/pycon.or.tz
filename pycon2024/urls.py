from django.urls import path

from .views import (
    HomePageView,
    CoCPageView
)

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("coc/", CoCPageView.as_view(), name="coc"),
]
