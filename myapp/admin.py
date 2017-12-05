from django.contrib import admin
from myapp.models import company
from myapp.models import sdgs

# Register your models here.

class companyAdmin(admin.ModelAdmin):
	list_display=('id', 'cName', 'cSex', 'cAddr', 'cEmail')
	list_filter=('cName', 'cSex')
	search_field=('cName',)
	ordering=('id',)

admin.site.register(company, companyAdmin)

class sdgsAdmin(admin.ModelAdmin):
	list_display=('id', 'sdg_Name', 'sdg_img_url')
	ordering=('id',)

admin.site.register(sdgs, sdgsAdmin)