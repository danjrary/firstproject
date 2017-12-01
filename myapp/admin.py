from django.contrib import admin
from myapp.models import company

# Register your models here.

class companyAdmin(admin.ModelAdmin):
	list_display=('id', 'cName', 'cSex', 'cAddr', 'cEmail')
	list_filter=('cName', 'cSex')
	search_field=('cName',)
	ordering=('id',)

admin.site.register(company, companyAdmin)