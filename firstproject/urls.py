"""firstproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from myapp.views import *
# sayhello, hello2, hello3, hello4, namecard, weatherbox, brand, catanimate, shoplist, bootstrap1, bs2

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', sayhello),
    url(r'^hello/$', sayhello),
    url(r'^hello2/(\w+)/$', hello2),
    url(r'^hello3/(\w+)/$', hello3),
    url(r'^hello4/(\w+)/$', hello4),
    url(r'^namecard/$', namecard),
    url(r'^weatherbox/$', weatherbox),
    url(r'^brand/$', brand),
    url(r'^catanimate/$', catanimate),
    url(r'^shoplist/$', shoplist),
    url(r'^bootstrap1/$', bootstrap1),
    url(r'^bs2/$', bs2),
    url(r'^bs3/$', bs3),
    url(r'^ystudio/$', ystudio),
    url(r'^hahow/$', hahow),
    url(r'^piano/$', piano),
    url(r'^index2/$', index2),
    url(r'^index1/$', index1),
    url(r'^index/$', index),
    url(r'^pdfjs/$', pdfjs),
    url(r'^listone/$', listone),
    url(r'^listall/$', listall)
]
