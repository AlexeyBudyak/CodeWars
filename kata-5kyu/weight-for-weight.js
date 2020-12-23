function sumDigits(str){
  return +(str.split('').reduce((s,x)=>s + +x,0) + '.' + str)
}
function orderWeight(strng) {
    return strng.split(' ')
             .map(str=>[sumDigits(str),str])
             .sort((a, b) =>   a[0] - b[0] )
             .map(el=>el[1])
             .join(' ');
}
