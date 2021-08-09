function halfIt(n){
  halfBin = typeof n == 'number' && n % 1 == 0 ? n.toString(2)
          .replace(/10/g,'1+0')
          .replace(/01/g,'0+1')
          .replace(/-1/g,'-+1')
          .split('+')
          .map(el => el[0].repeat(Math.round(el.length/2))).join('') : 0
  return parseInt(halfBin, 2)
}
