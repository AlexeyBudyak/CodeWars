function isPrime(num) {
  if(num <= 1)  return false;
  const root = Math.floor(Math.sqrt(num));
    for(let i = 2; i <= root; i++) 
        if(num % i == 0) return false;
  return true;
}
var largest = (n) => {
  if(!Number.isInteger(n))  return false;
  for(let i = 10 ** n; i > 10 ** (n - 1); i--)
    if(isPrime(i))  return i;
  return false;
}
