function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

function closestPower(n) {
  n = Math.floor(n);
  let [i, min] = [1,Infinity];
  let d, power, best, k;
  while (i * i < n){
    i++;
    power = Math.round(getBaseLog(i, n));
    k = i ** power;
    d = Math.abs(n - k);
    if(d < min)
        min = d,  best = k;
  }
  return n <= 4 ? 4 : best;
}
