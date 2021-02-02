function isPrime(num) {
  if(num <= 1)  return false;
  const root = Math.floor(Math.sqrt(num));
    for(let i = 2; i <= root; i++) 
        if(num % i == 0) return false;
  return true;
}

const primePrimes = n => {
  let sum = 0;
  let num = 0;
  for(let i = 3; i < n; i++)
    for(let j = 2; j < i; j++)
      if( isPrime(i) && isPrime(j))  num++,sum+= j/i;
  return [num,~~sum];
};
