

 • http://127.0.0.1:8000/api/games/ POST

{
    "player": "player2",
    "cards_quantity": 3
}

 • http://127.0.0.1:8000/api/games/9/end_game/ POST, Это для статистики. Но мы еще поговорим насчет этого.

{
    "player": "player2",
    "time_taken": "00:20:55",
    "moves_taken": 6
}

 • http://127.0.0.1:8000/api/gamestats/top_players/ GET Это тоже для статистики.

[
    {
        "player": 1,
        "avg_time": "0:06:38.750000"
    },
    {
        "player": 2,
        "avg_time": "0:07:26.875000"
    }
]
