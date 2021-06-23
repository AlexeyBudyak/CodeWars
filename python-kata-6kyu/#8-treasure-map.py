def move(c, point, size):
    if c[0] == 'N': point[0]-= int(c[1:])
    if c[0] == 'S': point[0]+= int(c[1:])  
    if c[0] == 'W': point[1]-= int(c[1:])
    if c[0] == 'E': point[1]+= int(c[1:])
    
    if -1 < point[0] < size[0] and -1 < point[1] < size[1] :
        return point
    else:
        return -1
    
def find_x(m):
    size = (len(m), len(m[0]))
    point = [size[0]//2, size[1]//2]
    track = []
    while m[point[0]][point[1]] != 'X':
        point = move(m[point[0]][point[1]], point, size)
        print(point)
        if point in track or point == -1:  
            return None
        track.append([point[0], point[1]])
    return tuple(point)
