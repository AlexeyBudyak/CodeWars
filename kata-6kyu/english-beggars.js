function beggars(values, n){
  return !n ? [] : Array(n).fill(0).map((_,i)=>values.reduce((a,b,j)=> j % n === i ? a + b : a , 0))
}
