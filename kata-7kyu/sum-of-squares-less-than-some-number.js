function getNumberOfSquares(n) {
  let [sum,i] = [0,0];
  while(sum + i * i < n)  sum+= (i * i++);
  return i - 1;
}
