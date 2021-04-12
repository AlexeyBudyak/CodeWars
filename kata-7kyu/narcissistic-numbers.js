function isNarcissistic(n){
  return n === [...(n+'')].reduce((a,b)=>a + (+b) ** (n+'').length,0)
}
