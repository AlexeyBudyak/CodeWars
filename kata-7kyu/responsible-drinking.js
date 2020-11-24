function hydrate(s) {
  let sum = s.split('').reduce((acc, curr) => curr * 1 === +curr ? acc = acc + +curr : acc, 0);
  let es = sum > 1 ? 'es' : '';
  return `${sum} glass${es} of water`;
}
