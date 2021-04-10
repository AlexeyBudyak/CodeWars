function isPrime(num) {
  if(num <= 1)  return false;
  const root = Math.floor(Math.sqrt(num));
    for(let i = 2; i <= root; i++) 
        if(num % i == 0) return false;
  return true;
}
function backwardsPrime(start, stop){
  let arr = [];
  for(let i = start; i <= stop; i++){
    const reverse = +(i+'').split('').reverse().join('')
     if(i !== reverse && isPrime(i) && isPrime(reverse))
       arr.push(i);
   }
  return arr;
}
