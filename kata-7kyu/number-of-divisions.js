const divisions = (n, divisor) => {
  let i = 0;
  while(n > 1 && n >= divisor)  
    n = Math.floor(n / divisor), i++;
  return i;
};
