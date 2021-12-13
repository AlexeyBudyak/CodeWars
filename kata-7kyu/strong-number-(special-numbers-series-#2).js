function strong(n) {
  const f = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  return (n+"").split('').reduce((sum,x)=> sum + f[+x], 0) === n ? "STRONG!!!!" : "Not Strong !!";
}
