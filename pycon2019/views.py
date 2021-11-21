from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "pycon2019/home.html"


class AboutPageView(TemplateView):
    template_name = "pycon2019/about.html"


class SpeakPageView(TemplateView):
    template_name = "pycon2019/speak.html"


class SponsorPageView(TemplateView):
    template_name = "pycon2019/sponsor.html"


class CovidPageView(TemplateView):
    template_name = "pycon2019/covid.html"


class CoCPageView(TemplateView):
    template_name = "pycon2019/coc.html"


class SchedulePageView(TemplateView):
    template_name = "pycon2019/schedule.html"


class TicketPageView(TemplateView):
    template_name = "pycon2019/ticket.html"
