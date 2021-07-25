def value(word):
    return sum([ord(c) - 64 for c in word])
def battle(x, y):
    if value(x) == value(y):
        return 'Tie!'
    return x if value(x) > value(y) else y
