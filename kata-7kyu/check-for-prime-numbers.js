function isPrime(n) {
  if(n <= 1)  return false;
  const root = Math.floor(Math.sqrt(n));
    for(let i = 2; i <= root; i++) 
        if(n % i == 0) return false;
  return true;
}
