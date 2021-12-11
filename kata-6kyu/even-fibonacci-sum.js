function fibonacci(max) {
  let sum = 0;
  let f = [0,1];
  while(f[1] < max){
    f = [f[1], f[0] + f[1]];
    if(f[0] % 2 === 0)
      sum+= f[0];
  }
  return sum;
}
