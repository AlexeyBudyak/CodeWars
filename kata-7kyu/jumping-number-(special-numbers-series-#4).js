function jumpingNumber(n){
  return Math.abs((n+'').split('').reduce((p,x,i)=> i ? p * ((n+'')[i-1] - x) : p, 1)) === 1 ? 'Jumping!!' : 'Not!!';
}
