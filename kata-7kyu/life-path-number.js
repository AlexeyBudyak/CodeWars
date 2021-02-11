function countNum(n){
  n = (n+'').split('').reduce((a,b)=>a+ +b,0);
  return n < 10 ? n : countNum(n)
}
function lifePathNumber(dateOfBirth) {
  return countNum(dateOfBirth.split('-').map(el=>countNum(el)).reduce((a,b)=>a+ +b,0));
}
