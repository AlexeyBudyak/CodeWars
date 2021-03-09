function strangeMath(n, k){
  return  [...Array(n).keys()].map(el=>el+1).sort().indexOf(k) + 1;
}
