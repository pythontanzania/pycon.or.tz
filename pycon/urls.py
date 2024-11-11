from django.urls import path
from . import views

urlpatterns = [
    path("", views.HomePageView, name="home"),
    path("speak/", views.SpeakPageView, name="speak"),
    path("coc/", views.CocPageview, name="coc"),

]