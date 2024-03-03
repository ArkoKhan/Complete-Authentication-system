
from django.urls import path
from .views import *

urlpatterns = [
    path("", Home, name='home'),
    path("registration", Registration, name='registration'),
    path("logIn", Login, name='logIn'),
    path("logOut", LogOut, name='logOut'),
    path("recover", Recover_pass, name='recover'),
    path("otp", Otp, name='otp'),
    path("new_pass/<token>/", New_pass, name='new_pass'),
    path("all_product", All_product, name='all_product'),
    path("about_us", AboutUs, name='about_us'),
    path("contact", Contact, name='contact'),

]