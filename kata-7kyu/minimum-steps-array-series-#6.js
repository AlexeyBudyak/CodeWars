function minimumSteps(numbers, value){
  let i = 0;
  numbers = numbers.sort((a,b)=>a-b);
  let s = numbers[0];
  while(s < value)  s+= numbers[++i];
  return i;
}
