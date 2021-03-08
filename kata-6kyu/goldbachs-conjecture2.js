function isPrime(num) {
  if(num <= 1)  return false;
  const root = Math.floor(Math.sqrt(num));
    for(let i = 2; i <= root; i++) 
        if(num % i == 0) return false;
  return true;
}

function goldbachPartitions(n){
  if(n%2)  return [];
  let result = [];
  for(let i = 2; i <= n/2; i++)
    if(isPrime(i) && isPrime(n-i))
      result.push(i + '+' + (n-i));
  return result;
}
