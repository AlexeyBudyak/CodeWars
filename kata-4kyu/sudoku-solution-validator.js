function isRowOK(arr){
    return arr.every(row => row.every(n => row.indexOf(n) === row.lastIndexOf(n)));
}

function validSolution(board){
  return isRowOK(board) &&
     isRowOK(board.map((row,y) => row.map((col, x) =>  board[x][y] ))) && 
     isRowOK(board.map((row, y) => row.map((col, x) => 
              board[y - (y % 3) + ~~(x / 3)][x + (y % 3) * 3 - 3 * ~~(x / 3)] )));
}
