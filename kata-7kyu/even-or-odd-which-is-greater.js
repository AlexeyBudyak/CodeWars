function evenOrOdd(str) {
  str = str.split('').map(Number);
  const even = str.filter(el=>el % 2 === 0).reduce((a,b) => a + b, 0);
  const odd = str.filter(el=>el % 2).reduce((a,b) => a + b, 0);
  return even === odd ? 'Even and Odd are the same' 
                      : even > odd ? 'Even is greater than Odd'
                                   : 'Odd is greater than Even'
}
