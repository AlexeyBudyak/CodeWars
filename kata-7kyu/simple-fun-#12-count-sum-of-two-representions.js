function countSumOfTwoRepresentations(n, l, r) {
  let ways = 0;
  for(let i = l; i <= r; i++)
    if(l <= i && i <= n - i && n - i <= r)  ways++
  return ways;
}
