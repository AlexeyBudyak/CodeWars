function powersUp(number, upTo) {
  let sum = 0;
  for(let i = 1; i <= upTo; i++)
    sum+= number ** i;
  return sum;
}
