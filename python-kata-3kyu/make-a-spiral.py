def step(d, x, y):
    x+= (d % 2 - 1) * (d % 4 -1)
    y+= -(d % 2) * (d % 4 - 2)
    return (x,y)

def spiralize(size):
    spiral = list([1] * size for i in range(size))
    x = 0; y = 1; d = 0 # d - direction, 0 - East, 1 - South, 2 - West, 3 North
    while True:
        spiral[y][x] = 0
        [x2,y2] = step(d, x, y)
        if(spiral[y2][x2] == 0):    return spiral
        [x3,y3] = step(d, x2, y2)
        if max(x3, y3) == size or min(x3, y3) == -1 or spiral[y3][x3] == 0:
            d+= 1
        else: 
            [x, y] = [x2, y2]
