function getMatrix(n) {
  return Array(n).fill(0).map((_,i)=>Array(n).fill(0).map((_,j)=>+(i===j)))
} 
