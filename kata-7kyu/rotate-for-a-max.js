function maxRot(n) {
  const arr = [n+''];
  for(let i = 0; i < (n+'').length - 1; i++)
    arr.push(arr[i].slice(0,i) + arr[i].slice(i+1) + arr[i][i])
  return Math.max(...arr.map(Number));
}
