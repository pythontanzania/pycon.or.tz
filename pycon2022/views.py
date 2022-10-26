from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "pycon2022/home.html"


class AboutPageView(TemplateView):
    template_name = "pycon2022/about.html"


class SpeakPageView(TemplateView):
    template_name = "pycon2022/speak.html"


class SponsorPageView(TemplateView):
    template_name = "pycon2022/sponsor.html"


class TravelPageView(TemplateView):
    template_name = "pycon2022/travel.html"


class CoCPageView(TemplateView):
    template_name = "pycon2022/coc.html"


class SchedulePageView(TemplateView):
    template_name = "pycon2022/schedule.html"


class TicketPageView(TemplateView):
    template_name = "pycon2022/ticket.html"
