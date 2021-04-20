function isNegativeZero(x) {
  return 1 / x === -Infinity && typeof x === 'number';
}
