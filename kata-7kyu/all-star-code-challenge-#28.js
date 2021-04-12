function convertCF(num, scale = 'c'){
  if( !'cf'.includes(scale)) throw Error; 
  return scale === 'c' ? (num - 32) * 5/9 : num * 9/5 + 32;
}
