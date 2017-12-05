import csv,sys,os

project_dir = "/firstproject/"
sys.path.append(project_dir)

os.environ['DJANGO_SETTINGS_MODULE'] = 'firstproject.settings'

import django

django.setup()

from myapp.models import sdgs

data = csv.reader(open("./sdg.csv"),delimiter=",")

for row in data:
	row = row.encode('utf8')
	if row[0] != 'sdg_Name':
		unit = sdgs()
		unit.sdg_Name = row[0]
		unit.sdg_Num = row[1]
		unit.sdg_Goal = row[2]
		unit.sdg_img_url = row[3]
		unit.save()
