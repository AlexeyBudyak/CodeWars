const indexOfx0 = (arr, x) => {
  i = 0;
  while(arr[i][0] !== x)  i++;
  return i;
}

function fareySequence(n, m) {
  let farey = [];
  for(let i = 0; i < n; i++)
    for(let j = i + 1; j <= n; j++)
      farey.push([i / j, i + '/' + j])
  farey = farey.filter((x,i) => indexOfx0(farey, x[0]) === i).sort((a,b) => a[0] - b[0]);
  farey.push([1,'1/1']);
  return farey[m - 1][1];
}
