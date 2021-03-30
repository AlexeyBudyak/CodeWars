function pattern(n){
 return n < 1 ? '' : Array(n).fill(0).map((_,i)=>(i+1+'').repeat(i+1)).join('\n');
}
