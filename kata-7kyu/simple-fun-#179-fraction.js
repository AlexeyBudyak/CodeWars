function fraction(a, b) {
  for(let i = 2; i <= Math.min(a,b); i++)
    if(a % i === 0 && b % i === 0){
      a = a / i;
      b = b / i;
      i = 1;
    }
  return a + b;
}
