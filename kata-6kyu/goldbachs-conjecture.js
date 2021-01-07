function isPrime(num) {
  if(num <= 1)  return false;
  const root = Math.floor(Math.sqrt(num));
    for(let i = 2; i <= root; i++) 
        if(num % i == 0) return false;
  return true;
}

var checkGoldbach = function(number) {
  if(number < 3 || number % 2)  return [];
  let i = 2;
  while(!isPrime(i) || !isPrime(number - i))  i++;
  return [i, number - i];
}
