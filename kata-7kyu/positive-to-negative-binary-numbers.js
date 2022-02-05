function positiveToNegative(b) {
  b = b.map(x => x ^ 1);
  b[b.length-1]++;
  for(i = b.length-1; i >= 0 && b[i] == 2; i--){
    b[i] = 0;
    if(i) b[i-1]++;
  }
  return b;
}
