function fibonacci(n) {
  let f = [0,1];
  while(f.length < n)  f.push(f[f.length-1] + f[f.length-2]);
  return n <= 0 ? [] : f;
}
