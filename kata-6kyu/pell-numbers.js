function pell(n) {
  let P = [BigInt(0), BigInt(1)]
  for(let i = 1; i < n; i++){
    P.push(2n * P[1] + P[0]);
    P.shift();
  }
  return P[1];
}
