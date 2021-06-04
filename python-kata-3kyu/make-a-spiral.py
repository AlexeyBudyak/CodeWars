def step(d, x, y): 
    x+= (d % 2 - 1) * (d - 1)
    y+= -(d % 2) * (d - 2)
    return (x,y)

def spiralize(size):
    spiral = list([1] * size for i in range(size))
    x2 = x = 0; y2 = y = 1; d = 0 
    while spiral[y2][x2]:
        spiral[y][x] = 0
        [x2,y2] = step(d, x, y)
        [x3,y3] = step(d, x2, y2)
        if max(x3, y3) == size or min(x3, y3) == -1 or spiral[y3][x3] == 0:
            d= (d + 1) % 4
        else: 
            [x, y] = [x2, y2]
    return spiral
