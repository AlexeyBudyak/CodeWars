function between(a, b) {
  return new Array(b - a + 1).fill().map((_,i) => a + i);
}
