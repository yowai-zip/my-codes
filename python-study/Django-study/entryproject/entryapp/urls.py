from django.contrib import admin
from django.urls import path, include
from .views import hello_world
from .views import ListEntryView, DetailEntryView

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('hello/', hello_world, name='hello'),
    path('', ListEntryView.as_view(), name='list_entry'),
    path('entry/<int:pk>/detail/', DetailEntryView.as_view(), name='detail_entry'),

]