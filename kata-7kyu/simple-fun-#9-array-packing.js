function arrayPacking(a) {
  return parseInt(a.reverse().map(x => x.toString(2).padStart(8,"0")).join(''),2);
}
