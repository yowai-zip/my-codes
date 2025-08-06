from django.contrib import admin
from django.urls import path, include
from .views import hello_world
from .views import ListEntryView

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('hello/', hello_world, name='hello'),
    path('entries/', ListEntryView.as_view(), name='list_entry'),
    # path('', include('entryapp.urls')),

]