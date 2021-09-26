function oddRow(n) {
  let i = 2;
  let x = 1;
  let arr = [];
  while(n > 1)  n--, x+=i, i+= 2;
  i+= x;
  while(x < i)  arr.push(x), x+= 2;
  return arr;
}
