from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "pycon2020/home.html"


class AboutPageView(TemplateView):
    template_name = "pycon2020/about.html"


class SpeakPageView(TemplateView):
    template_name = "pycon2020/speak.html"


class SponsorPageView(TemplateView):
    template_name = "pycon2020/sponsor.html"


class CovidPageView(TemplateView):
    template_name = "pycon2020/covid.html"


class CoCPageView(TemplateView):
    template_name = "pycon2020/coc.html"


class SchedulePageView(TemplateView):
    template_name = "pycon2020/schedule.html"
