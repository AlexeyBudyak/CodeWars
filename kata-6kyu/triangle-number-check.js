function isTriangleNumber(number) {
  let s = 1, i = 2;
  while(s < number)  s+= i++;
  return s === number || !number; 
}
