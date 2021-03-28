function rounders(value) {
  let ex = 10;
  while(ex < value)  value = Math.round(value / ex) * ex, ex*= 10;
  return value;
}
