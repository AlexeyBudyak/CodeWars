function matrixAddition(a, b){
  return a.map((x,i) => x.map((y,j) => y + b[i][j]))
}
