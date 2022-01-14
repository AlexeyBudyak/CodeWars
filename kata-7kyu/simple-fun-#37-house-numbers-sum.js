function houseNumbersSum(inputArray) {
  return inputArray.slice(0,inputArray.indexOf(0)).reduce((sum,x)=>sum + x, 0);
}
