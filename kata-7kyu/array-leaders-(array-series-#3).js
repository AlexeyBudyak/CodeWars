var arrayLeaders = numbers => {
  let sum = 0;
  let result = [];
  while(numbers.length){
    let x = numbers.pop();
    if(x > sum)
      result.unshift(x)
    sum+= x;
  }
  return result;
}
