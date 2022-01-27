function toAndFrom(a, b, t) {
  let sign = +(b > a) * 2 - 1;
  let d = t % (2 * sign * (b - a));
  return [a + d * sign, 2 * b - d * sign - a][+(d > (b - a) * sign)]                  
}
