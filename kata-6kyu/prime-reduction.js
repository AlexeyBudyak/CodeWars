function isPrime(num) {
  if(num <= 1)  return false;
  const root = Math.floor(Math.sqrt(num));
    for(let i = 2; i <= root; i++) 
        if(num % i == 0) return false;
  return true;
}
function primeReduction(n){
  return (n > 9) ? primeReduction((n + '0').split('').reduce((sum,x) => sum + (+x) ** 2,0)) 
                 : n === 1 || n === 7;
}
function solve(a, b) {
  let sum = 0;
  for(let i = a; i < b; i++)
    if(isPrime(i))  sum+= +primeReduction(i);
  return sum;
}
