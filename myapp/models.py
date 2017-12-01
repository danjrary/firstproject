from django.db import models

# Create your models here.

class company(models.Model):
	cName = models.CharField(max_length=20, null=False)
	cSex = models.CharField(max_length=2, default='M', null=False)
	cAddr = models.CharField(max_length=255, blank=True, default='')
	cEmail = models.EmailField(max_length=100, blank=True, default='')

	def __str__(self):
		return self.cName

class sdgs(models.Model):
	sdg_Name = models.CharField(max_length=20, null=False)
	sdg_Num = models.CharField(max_length=20, null=False)
	sdg_Goal = models.CharField(max_length=20, null=False)

	def __str__(self):
		return self.sdg_Name
