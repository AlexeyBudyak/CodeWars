function checkConcatenatedSum(a, n){
  return (Math.abs(a)+'').split('').reduce((sum,c)=>sum + +c.repeat(n),0) === Math.abs(a);
}
