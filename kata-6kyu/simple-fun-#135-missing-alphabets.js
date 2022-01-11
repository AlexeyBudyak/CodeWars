function missingAlphabets(s) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  const sets = s.split('').map(el => s.split(el).length - 1).sort((a,b)=>(b-a))[0];
  return abc.split('').map(el=> el.repeat(sets + 1 - s.split(el).length)).join('')
}
