function checkOne(n, k){
  while(n > 1)  
    n = (n - k) / 2;
  return n === 1;
}

function minimalSubtractor(n){
  for(let k = 0; k < n; k++)
    if(checkOne(n,k)) return k;
}
