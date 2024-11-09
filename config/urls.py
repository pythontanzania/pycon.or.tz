from django.conf import settings
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("accounts/", include("allauth.urls")),
    path("2019/", include("pycon2019.urls")),
    path("2020/", include("pycon2020.urls")),
    path("2021/", include("pycon2021.urls")),
    path("2022/", include("pycon2022.urls")),
    path("", include("pycon.urls")),
]

if settings.DEBUG:
    import debug_toolbar

    urlpatterns = [
        path("__debug__/", include(debug_toolbar.urls)),
    ] + urlpatterns
