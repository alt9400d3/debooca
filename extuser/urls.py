from django.conf.urls import include, url
from extuser.views import(
    login,
    logout,
    register,
    profile,
)


urlpatterns = [
    url(r'^login/', login),
    url(r'^logout/', logout),
    url(r'^register/', register),
    url(r'^profile/', profile),
]
