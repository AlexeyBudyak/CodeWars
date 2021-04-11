function countArara(n) {
  const arara = Array(~~(n/2)).fill('adak');
  if(n % 2)  arara.push('anane')
  return arara.join(' ');
}
