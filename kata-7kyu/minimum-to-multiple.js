function minimum(a, x) {
  let n = 0
  while((a + n) % x && (a - n) % x) n++;
  return n;
}
