function kthDivisor(n, k) {
  let [divs, i] = [0, 1];
  while(i <= n/2 && divs < k) divs+= (n % i++ === 0);
  return divs === k - 1 ? n : (i * (divs === k)) - 1;
}
