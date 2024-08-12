import os
from datetime import timedelta

from data.config import BASE_DIR, PostgresSettings, DjangoSettings

django = DjangoSettings()

SECRET_KEY = django.secret_key
DEBUG = django.debug

ALLOWED_HOSTS = django.allowed_hosts_list

CSRF_TRUSTED_ORIGINS = django.csrf_trusted_origins_list

ROOT_URLCONF = "conf.urls"
WSGI_APPLICATION = "conf.wsgi.application"

STATIC_URL = "static/"

MEDIA_URL = "uploads/"
MEDIA_ROOT = os.path.join(BASE_DIR, "uploads")

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"