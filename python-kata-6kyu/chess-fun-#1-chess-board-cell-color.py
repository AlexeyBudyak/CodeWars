def cell_color(cell):
    return ('ABCDEFGH'.find(cell[0]) + int(cell[1]))%2

def chess_board_cell_color(cell1, cell2):
    return cell_color(cell1) == cell_color(cell2)
