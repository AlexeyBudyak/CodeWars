function isDivisible(n, ...arg){
  return arg.every(el=> n % el === 0);
}
