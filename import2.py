import csv,sys,os

project_dir = "/static/data"

sys.path.append(project_dir)

os.environ['DJANGO_SETTINGS_MODULE'] = 'settings'

import django

django.setup()

from myapp.models import company

data = csv.reader(open("/static/data.data.csv"),delimiter=",")

for row in data:
	if row[0] != 'cName':
		unit = company()
		unit.cName = row[0]
		unit.cSex = row[1]
		unit.cAddr = row[2]
		unit.cEmail = row[3]
		unit.save()