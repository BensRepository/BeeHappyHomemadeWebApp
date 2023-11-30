from django.db import models

class Case(models.Model):
    name = models.CharField(max_length=40)
    price = models.FloatField()
    hashid  = models.CharField(max_length=50)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
class Rate(models.Model):
    name = models.CharField(max_length=40)
    value = models.FloatField()

    def __str__(self):
        return self.name
    
class LeaderboardCompetitiveEasyMode(models.Model):
    playerID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    streak = models.IntegerField()
    rank = models.CharField(max_length=22)
    score = models.FloatField()
    length = models.CharField(max_length=10)

    def __str__(self):
        return self.name
class LeaderboardCompetitiveMediumMode(models.Model):
    playerID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    streak = models.IntegerField()
    rank = models.CharField(max_length=22)
    score = models.FloatField()
    length = models.CharField(max_length=10)

    def __str__(self):
        return self.name
class LeaderboardCompetitiveHardMode(models.Model):
    playerID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    streak = models.IntegerField()
    rank = models.CharField(max_length=22)
    score = models.FloatField()
    length = models.CharField(max_length=10)

    def __str__(self):
        return self.name

class LeaderboardCompetitiveExpertMode(models.Model):
    playerID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    streak = models.IntegerField()
    rank = models.CharField(max_length=22)
    score = models.FloatField()
    length = models.CharField(max_length=10)
    def __str__(self):
        return self.name

class LeaderboardCompetitiveOhnepixelMode(models.Model):
    playerID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    streak = models.IntegerField()
    rank = models.CharField(max_length=22)
    score = models.FloatField()
    length = models.CharField(max_length=10)
    def __str__(self):
        return self.name
    





class LeaderboardSurvivalEasyMode(models.Model):
    playerID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    streak = models.IntegerField()

    def __str__(self):
        return self.name
class LeaderboardSurvivalMediumMode(models.Model):
    playerID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    streak = models.IntegerField()


    def __str__(self):
        return self.name
class LeaderboardSurvivalHardMode(models.Model):
    playerID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    streak = models.IntegerField()


    def __str__(self):
        return self.name

class LeaderboardSurvivalExpertMode(models.Model):
    playerID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    streak = models.IntegerField()

    def __str__(self):
        return self.name

class LeaderboardSurvivalOhnepixelMode(models.Model):
    playerID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    streak = models.IntegerField()

    def __str__(self):
        return self.name