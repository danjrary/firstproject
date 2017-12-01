from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
from myapp.models import company

# Create your views here.
def sayhello(request):
	return HttpResponse("Hello Django")

def hello2(request, username):
	return HttpResponse("Hello " + username)

def hello3(request, username):
	now = datetime.now()
	return render(request, "hello3.html", locals())

def hello4(request, username):
	now = datetime.now()
	return render(request, "hello4.html", locals())
def namecard(request):
	return render(request, "namecard.html", locals())

def weatherbox(request):
	return render(request, "weatherbox.html", locals())

def brand(request):
	return render(request, "brand.html", locals())

def catanimate(request):
	return render(request, "catanimate.html", locals())

def shoplist(request):
	return render(request, "shoplist.html", locals())

def bootstrap1(request):
	return render(request, "bootstrap1.html", locals())

def bs2(request):
	return render(request, "bs2.html", locals())

def bs3(request):
	return render(request, "bs3.html", locals())

def ystudio(request):
	return render(request, "ystudio.html", locals())

def hahow(request):
	return render(request, "hahow.html", locals())

def piano(request):
	return render(request, "piano.html", locals())

def index2(request):
	return render(request, "index2.html", locals())

def index1(request):
	return render(request, "index1.html", locals())

def index(request):
	return render(request, "index.html", locals())

def pdfjs(request):
	return render(request, "pdfjs.html", locals())

def listone(request):
	try:
		unit = company.objects.get(cName="AOU")
	except:
		errormessage = "讀取錯誤"
	return render(request, "listone.html", locals())

def listall(request):
	companys = company.objects.all().order_by('id')
	return render(request, "listall.html", locals())
