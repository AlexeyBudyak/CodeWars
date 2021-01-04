function sumFibs(n) {
  let sum = 0;
  let fib = [0, 1];
  for(let i = 1; i < n; i++)
    fib.push(fib[0] + fib[1]),fib.shift(),sum-= fib[1] * (fib[1] % 2 - 1);
  return sum
}
