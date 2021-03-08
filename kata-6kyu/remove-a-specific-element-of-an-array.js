function selectSubarray(arr) {
  const q = arr.map((_,i)=> 
                      Math.abs(arr.filter((_,j)=>j!==i).reduce((a,b)=>a*b,1)/
                               arr.filter((_,j)=>j!==i).reduce((a,b)=>a+b,0)));
  const index = q.indexOf(Math.min(...q));
  return [index,arr[index]];
}
