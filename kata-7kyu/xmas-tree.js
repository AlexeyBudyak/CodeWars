function line(n, i){
  return '_'.repeat(n - i - 1) + '#'.repeat(i * 2 + 1) + '_'.repeat(n - i - 1);
}
function xMasTree(n){
   return [ ...Array(n).fill().map((_,i) => line(n,i)), line(n,0),line(n,0)]
}
