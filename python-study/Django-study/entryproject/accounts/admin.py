from django.contrib import admin
from .models import CustomUser
# 管理画面で編集・閲覧ができるようにする設定
admin.site.register(CustomUser)