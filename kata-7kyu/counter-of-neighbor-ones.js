function onesCounter(input) {
  ones = 0;
  arr = [];
  for(i in [...input, 0])
    if(input[i] == 1)
      ones++;
    else
      arr.push(ones),ones = 0;
  return arr.filter(el => el);
}
