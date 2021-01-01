function isPrime(num) {
  if(num <= 1)  return false;
  const root = Math.floor(Math.sqrt(num));
    for(let i = 2; i <= root; i++) 
        if(num % i == 0) return false;
  return true;
}
function solve(x,y) {
  let num = 0;
  let primes = 0;
  let i,j;
  for(i = 0; i < y / 2; i++)
    for(j = 0, num = 2 ** i + 1; num < y; j++){
      num = (2 ** i) * (3 ** j) + 1;
      if(num >= x && num <= y && isPrime(num))  primes++;
    }      
  return primes;
}
