function skiponacci(n) {
  let fib = [1, 1];
  let ski = '';
  for(let i = 2; i < n; i++)  fib.push(fib[i-2] + fib[i-1]);
  for(let i = 0; i < n; i++){
    if(i)  ski+= ' ';
    ski+=  (i % 2) ? 'skip' : fib[i];
  }
  return ski;
}
