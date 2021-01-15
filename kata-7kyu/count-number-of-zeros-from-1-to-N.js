function countZeros(n) {
  let s = 0;
  for(let i = 9; i <= n; i++)
    s+= (i + '').split('').filter(el => el === '0').length;
  return s;
}
