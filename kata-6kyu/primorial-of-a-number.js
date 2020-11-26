function isPrime(n){
  for(let i = 2; i <= n/2; i++)
    if(!(n % i))  return false;
  return true;
}
function numPrimorial(n){
  let product = 1;
  let count = 0;
  for(let i = 2; count < n; i++)
     if(isPrime(i)) count++, product*= i; 
  return product;
}
