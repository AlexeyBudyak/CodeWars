function specialNumber(n){
  return /[^0-5]/g.test(n+'') ? 'NOT!!' : 'Special!!';
}
