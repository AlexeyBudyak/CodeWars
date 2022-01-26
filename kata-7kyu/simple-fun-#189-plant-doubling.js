function plantDoubling(n) {
  const c =  n - 2 ** ~~Math.log2(n);
  return !c ? 1: 1 + plantDoubling(c);
}
