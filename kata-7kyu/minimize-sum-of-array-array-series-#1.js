function minSum(arr) {
  arr = arr.sort((a,b)=>a-b);
  const l = arr.length;
  let sum = 0;
  for(let i = 0; i < l / 2; i++)
    sum+= arr[i] * arr[l - 1 - i];
  return sum;
}
