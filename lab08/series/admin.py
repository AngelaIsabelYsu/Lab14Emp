from django.contrib import admin
from .models import *
# Register your models here.


class SeriesAdmin(admin.ModelAdmin):
    list_display = ['name', 'release_date', 'rating', 'category']
    list_filter = ['release_date']
    date_hierarchy = 'release_date'

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['description']


admin.site.register(Category, CategoryAdmin)
admin.site.register(Serie, SeriesAdmin)