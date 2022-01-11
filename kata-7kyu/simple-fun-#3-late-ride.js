function lateRide(n) {
  let str= (Math.floor(n / 60) + '').padStart(2, '0') + (n % 60 + '').padStart(2, '0');
  return str.split('').reduce((sum,x)=>sum + +x,0);
}
