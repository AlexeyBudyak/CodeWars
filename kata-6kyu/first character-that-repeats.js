function firstDup (s) {
  return s.split('').filter(el => s.indexOf(el) !== s.lastIndexOf(el))[0];
}
