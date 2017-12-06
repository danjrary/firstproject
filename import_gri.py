import csv,sys,os

project_dir = "/firstproject/"
sys.path.append(project_dir)

os.environ['DJANGO_SETTINGS_MODULE'] = 'firstproject.settings'

import django

django.setup()

from myapp.models import gri

data = csv.reader(open("./static/data/gri_mediatek.csv", encoding="big5"),delimiter=",")

for row in data:
	if row[0] != 'framework':
		unit = gri()
		unit.framework = row[0]
		unit.version = row[1]
		unit.ds_type = row[2]
		unit.category = row[3]
		unit.aspect = row[4]
		unit.indicator = row[5]
		unit.guidance = row[6]
		unit.disclosure = row[7]
		unit.assurance_third = row[8]
		unit.assurance_account = row[9]
		unit.save()
