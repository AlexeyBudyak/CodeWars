function singleDigit(n) {
  return n < 10 ? n : singleDigit(n.toString(2).split('').reduce((sum,x)=>sum + +x,0));
}
