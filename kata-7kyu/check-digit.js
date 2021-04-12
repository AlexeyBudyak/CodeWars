function checkDigit(n, i1, i2, digit) {
  return (n+'').slice(Math.min(i1,i2),Math.max(i1,i2)+1).includes(digit);
}
