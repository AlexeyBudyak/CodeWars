function isPrime(n){
  for(let i = 2; i <= n ** 0.5; i++)
    if( !(n % i))  return false
  return true;
}
function nextPrime(n){
  if(n < 2)  return 2;
  let N = n + 1;
  while(!isPrime(N))  N++;
  return N;
}
