function  fibonacci(n){
  if(n < 3)  return [0, 1, 1][n];
  let prev = [1, 1];
  let f = 0;
  for(let i = 2; i < n; i++)
    f = prev[0] + prev[1], prev[0] = prev[1], prev[1] = f;
  console.log(n,f);
  return f;
}
