function digits(num){
  let sum = [];
  num = (num+'').split('').map(el => +el);
  for(i = 0; i < num.length - 1; i++)
    for(j = i + 1; j < num.length; j++)
      sum.push(num[i] + num[j]);
  return sum;
}
