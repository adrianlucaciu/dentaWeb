from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('contact.html', views.contact, name="contact"),
    path('news.html', views.news, name="news"),
    path('about.html', views.about, name="about"),
    path('pricing.html', views.pricing, name="pricing"),
    path('service.html', views.service, name="service"),
    path('appointment.html', views.appointment, name="appointment"),


    path("register", views.register_request, name="register"),
    path("login", views.login_request, name="login"),
    path("logout", views.logout_request, name="logout"),
    # DB test

]
