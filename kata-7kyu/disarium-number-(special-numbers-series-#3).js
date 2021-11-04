function disariumNumber(n){
  return ['Not','Disarium'][+([...n+''].reduce((s,x,i)=>s + x ** (i+1),0) === n)] + ' !!';
}
