function getDivisorsCnt(n){
  let s = 1;
  for(let i = 1; i <= n/2; i++)
    if(n % i === 0)  s++;
  return s;
}
