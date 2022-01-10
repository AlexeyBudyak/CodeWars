function diplomas(h, w, n) {
  let i = 0;
  while(Math.floor(i / h) * Math.floor(i / w) < n)  i++;
  return i;
}
