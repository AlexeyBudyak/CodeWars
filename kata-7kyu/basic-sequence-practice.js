function sumOfN(n) {
  let s = 0;
  let arr = [];
  for(let i = 0; i <=  Math.abs(n); i++, s+=i)
    arr.push(s * (1 - 2 * +(n < 0 && i > 0)));
  return arr;
}
