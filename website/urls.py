from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('contact.html', views.contact, name="contact"),
    path('news.html', views.news, name="news"),
    path('about.html', views.about, name="about"),
    path('pricing.html', views.pricing, name="pricing"),
    path('service.html', views.service, name="service"),
    path('appointment.html', views.appointment, name="appointment"),
]
