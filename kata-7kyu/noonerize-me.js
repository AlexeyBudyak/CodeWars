const noonerize = ([a,b]) => {
  a = (a+'').split('');
  b = (b+'').split('');
  [a[0],b[0]] = [b[0],a[0]];
  return Math.abs(+a.join('') - +b.join('')) || 'invalid array';
}
