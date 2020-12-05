const to4bits = x => x.toString(2).split('').reverse();

function sharedBits(a, b) {
  b = to4bits(b);
  return to4bits(a).filter((el,i) => el===b[i] && el==='1').length > 1;
}
