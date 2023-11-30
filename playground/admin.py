from django.contrib import admin
from .models import Case
from .models import Rate
from .models import LeaderboardCompetitiveEasyMode
from .models import LeaderboardCompetitiveMediumMode
from .models import LeaderboardCompetitiveHardMode
from .models import LeaderboardCompetitiveExpertMode
from .models import LeaderboardCompetitiveOhnepixelMode

from .models import LeaderboardSurvivalEasyMode
from .models import LeaderboardSurvivalMediumMode
from .models import LeaderboardSurvivalHardMode
from .models import LeaderboardSurvivalExpertMode
from .models import LeaderboardSurvivalOhnepixelMode

admin.site.register(Case)
admin.site.register(Rate)
admin.site.register(LeaderboardCompetitiveEasyMode)
admin.site.register(LeaderboardCompetitiveMediumMode)
admin.site.register(LeaderboardCompetitiveHardMode)
admin.site.register(LeaderboardCompetitiveExpertMode)
admin.site.register(LeaderboardCompetitiveOhnepixelMode)

admin.site.register(LeaderboardSurvivalEasyMode)
admin.site.register(LeaderboardSurvivalMediumMode)
admin.site.register(LeaderboardSurvivalHardMode)
admin.site.register(LeaderboardSurvivalExpertMode)
admin.site.register(LeaderboardSurvivalOhnepixelMode)
