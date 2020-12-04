function narcissistic(x) {
  return (x+'').split('').reduce((a,b)=>a + b ** (x+'').length,0) === x;
}
