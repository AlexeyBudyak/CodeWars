function sumDigits(number) {
  return (Math.abs(number)+'').split('').reduce((a,b)=>a+ +b,0);
}
