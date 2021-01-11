function isPrime(num) {
  if(num <= 1)  return false;
  const root = Math.floor(Math.sqrt(num));
    for(let i = 2; i <= root; i++) 
        if(num % i == 0) return false;
  return true;
}
function minimumNumber(numbers){
  const num = numbers.reduce((s,x) => s + x,0);
  let i = num;
  while(!isPrime(i))  i++;
  return i - num;
}
