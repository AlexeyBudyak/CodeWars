function displayLargeNumber(n) {
  let num = '';
  while(n >= 1000)  num= ',' + n % 1000 + num, n = Math.floor(n /1000);
  return n + num;
}
