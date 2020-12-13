function nbDig(n, d) {
  let sum = 0;
  for(let i = 0; i <= n; i++)  
    sum+= (i ** 2 + '').split('').filter((el) => el == d).length;
  return sum;
}
