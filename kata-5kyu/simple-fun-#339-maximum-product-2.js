const sum = arr => arr.reduce((s,x) => s+x,0);

function maximumProduct(n) {
  let arr = []
  for(let x = 2; sum(arr) + x <= n; arr.unshift(x++));
  let reminder = n - sum(arr);
  for(let i = 0; i < reminder; i++) arr[i % arr.length]++;
  return arr.reduce((p,x)=> p * x, 1);
}
