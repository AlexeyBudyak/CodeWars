function cumulativeTriangle(n) {
  let leftDigit = 1;
  for(let i = 1; i < n; i++)
    leftDigit+= i;
  return (leftDigit * 2 + n  - 1) * n / 2;
}
