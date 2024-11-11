from django.shortcuts import render

# Create your views here.
def HomePageView(request):
    return render(request, "pycon/home.html")

def SpeakPageView(request):
    return render(request, "pycon/speak.html")