function duplicateSandwich(a) {
  const b = (typeof a === 'string') ? [...a] : a;
  const c =  b.filter(el=> b.indexOf(el) !== b.lastIndexOf(el))[0];
  const result =  b.slice(b.indexOf(c) + 1, b.lastIndexOf(c));
  return (typeof a === 'string') ? result.join('') : result;
}
