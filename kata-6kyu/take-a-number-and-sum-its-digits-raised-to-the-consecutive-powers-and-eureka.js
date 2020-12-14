function isCoolNumber(n){
  return (n+'').split('').reduce((total, x, i) => total + (+x) ** (i+1) ,0) === n;
}
function sumDigPow(a, b) {
  const eureka = [];
  for(let i = a; i < b; i++)
    if(isCoolNumber(i))
      eureka.push(i);
  return eureka;
}
