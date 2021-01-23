function dup(s) {
  return s.map(word => word.split('').map((el,i,w) => el !== w[i-1] ? el : '' ).join(''));
}
