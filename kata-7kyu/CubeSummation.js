function cubeSum(n, m){
  let sum = 0;
  let x;
  if(n > m)  x = n, n = m, m = x;
  for(let i = n + 1; i <= m; i++)
    sum+= i ** 3;
  return sum;
}
