function well(x){
  const n =  [].concat(...x).filter(el=>(el+'').toLowerCase() === 'good').length
  return n > 2 ? 'I smell a series!' : n > 0 ? 'Publish!' : 'Fail!';
}
