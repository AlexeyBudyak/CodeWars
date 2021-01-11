function pyramid(n) {
  let arr = [];
  for(let i = 0; i < n; i++)
    arr.push(i ? [1, ...arr[i - 1]] : [1]);
  return arr;
}
