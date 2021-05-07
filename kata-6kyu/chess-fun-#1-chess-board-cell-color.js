function cellColor(cell){
  return ('ABCDEFGH'.indexOf(cell[0]) + +cell[1])%2
}

function chessBoardCellColor(cell1, cell2) {
  return cellColor(cell1) === cellColor(cell2)
}
