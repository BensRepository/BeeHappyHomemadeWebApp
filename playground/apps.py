from django.apps import AppConfig


class PlaygroundConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'playground'

    def ready(self):
        print("Loading Sceduler...")
        from .caseprice_scheduler import caseprice_updater
        caseprice_updater.start()