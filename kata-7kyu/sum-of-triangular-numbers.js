function sumTriangularNumbers(n) {
  let c = 0, s =0;
  for(let i = 1; i <= n; i++)  c+= i, s+= c;
  return s;
}
