from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "pages/home.html"


class AboutPageView(TemplateView):
    template_name = "pages/about.html"


class SpeakPageView(TemplateView):
    template_name = "pages/speak.html"


class SponsorPageView(TemplateView):
    template_name = "pages/sponsor.html"


class CovidPageView(TemplateView):
    template_name = "pages/covid.html"


class CoCPageView(TemplateView):
    template_name = "pages/coc.html"


class SchedulePageView(TemplateView):
    template_name = "pages/schedule.html"


class TicketPageView(TemplateView):
    template_name = "pages/ticket.html"
