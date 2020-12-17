function validate(n){
  return !((n+'').split('').reverse().map((el,i)=> (+el) * (1 + i % 2))
           .reduce((sum,n)=>sum + !(n < 10) + n % 10 ,0) % 10);
}
