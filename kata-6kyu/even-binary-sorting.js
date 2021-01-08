function evenBinary(n) {
  const even = n.split(' ').filter(el => el[2] === '0').sort();
  let i = 0;
  return n.split(' ').map(el=> (el[2] === '0') ? even[i++] : el).join(' ');
}
