function findSum(n) {
  return Array(n).fill(0).map((_,i)=>i+1).reduce((a,b)=> !(b%3) || !(b%5) ? a+b : a,0);
}
