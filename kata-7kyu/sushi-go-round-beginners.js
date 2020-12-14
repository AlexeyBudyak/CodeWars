function totalBill(str) {
  return Math.ceil(str.split('').filter(el=>el==='r').length * 0.8) * 2;
}
