from django.db import models

class Player(models.Model):
    username = models.CharField(max_length=255, unique=True)

    class Meta:
        verbose_name = "Игрок"
        verbose_name_plural = "Игроки"

    def __str__(self):
        return self.username

class MemoryCard(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField()
    content = models.TextField(max_length=255)

    class Meta:
        verbose_name = "Карточка"
        verbose_name_plural = "Карточки"
    
    def __str__(self):
        return self.name

class Game(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    cards_quantity = models.IntegerField()
    memorycards = models.ManyToManyField(MemoryCard)

    class Meta:
        verbose_name = "Игра"
        verbose_name_plural = "Игры"

    def __str__(self):
        return f"Game for {self.player.username}"

class GameStats(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    time_taken = models.DurationField()
    moves_taken = models.IntegerField()

    class Meta:
        verbose_name = "Статистика игры"
        verbose_name_plural = "Статистика игр"
    
    def __str__(self):
        return f"GameStats for {self.player.username}"