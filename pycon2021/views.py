from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "pycon2021/home.html"


class AboutPageView(TemplateView):
    template_name = "pycon2021/about.html"


class SpeakPageView(TemplateView):
    template_name = "pycon2021/speak.html"


class SponsorPageView(TemplateView):
    template_name = "pycon2021/sponsor.html"


class ReportPageView(TemplateView):
    template_name = "pycon2021/report.html"


class CovidPageView(TemplateView):
    template_name = "pycon2021/covid.html"


class CoCPageView(TemplateView):
    template_name = "pycon2021/coc.html"


class SchedulePageView(TemplateView):
    template_name = "pycon2021/schedule.html"


class TicketPageView(TemplateView):
    template_name = "pycon2021/ticket.html"
