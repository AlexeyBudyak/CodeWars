function digPow(n, p){
  const N = (n+'').split('').reduce((x,el, i)=>x + el ** (p + i),0);
  return (N % n) ? -1 : N / n;
}
