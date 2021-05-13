function toDayOfYear([d,m,y]) {
  const leap = (y % 4 === 0 && y % 100 !== 0) + !(y % 400);
  let days = [0,31,59,90,120,151,181,212,243,273,304,334];
  return d + days[m - 1] + leap * (m > 2);
}
