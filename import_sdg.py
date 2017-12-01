import csv,sys,os

project_dir = "C:/Users/Lucas.Lee/firstproject/firstproject/firstproject"

sys.path.append(project_dir)

os.environ['DJANGO_SETTINGS_MODULE'] = 'settings'

import django

django.setup()

from myapp.models import sdgs

data = csv.reader(open("C:/Users/Lucas.Lee/firstproject/firstproject/sdg.csv"),delimiter=",")

for row in data:
	if row[0] != 'sdg_Name':
		unit = sdgs()
		unit.sdg_Name = row[0]
		unit.sdg_Num = row[1]
		unit.sdg_Goal = row[2]
		unit.save()
