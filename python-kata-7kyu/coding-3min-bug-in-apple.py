def sc(apple):
    n = [el for sublist in apple for el in sublist].index('B')
    return [n // len(apple[0]), n % len(apple[0])]
