function validNumber(num){
  return +num === num * 1 && num.includes('.') && num.split('.')[1].length === 2;
}
