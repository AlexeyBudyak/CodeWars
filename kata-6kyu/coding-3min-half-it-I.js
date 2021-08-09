function halfIt(n){
  return +('' + n).split('').map(el=> '-.'.includes(el) ? el : '' + Math.round(+el/2)).join('') || 0
}
