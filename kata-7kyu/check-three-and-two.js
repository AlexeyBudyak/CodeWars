function checkThreeAndTwo(array) {
  return [array.filter(el => el ==='a').length,
         array.filter(el => el ==='b').length,
         array.filter(el => el ==='c').length].sort().join('') === '023';
}
