def tennis_game_points(score): 
    print(score)
    a,b = score.split('-')
    points = {'love' : 0, '15': 1, '30': 2, '40': 3}
    if b == 'all':  b = a
    return points[a] + points[b]
