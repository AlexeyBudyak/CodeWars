def on_board(x, y):
    return x in range(8) and y in range(8)
def chess_knight(cell):
    data = [(-2,-1),(-2,1),(-1,-2),(-1,2),(2,-1),(2,1),(1,-2),(1,2)]
    x = 'abcdefgh'.find(cell[0])
    y = int(cell[1]) - 1
    return sum(on_board(x+a,y+b) for a,b in data)
