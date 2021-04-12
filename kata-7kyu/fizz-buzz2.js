function solution(n){
  n--;
  const A = ~~(n / 3) - ~~(n / 15);
  const B = ~~(n / 5) - ~~(n / 15);
  const C = ~~(n / 15);
  return [A, B, C]
}
