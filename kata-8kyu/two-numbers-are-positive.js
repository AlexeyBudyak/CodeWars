function twoArePositive(...n) {
  return n.filter(el=>el>0).length === 2;
}

// function twoArePositive(a, b, c) {
//   return +(a>0) + +(b>0) + +(c>0) === 2;
// }
