function lowercaseCount(str){
  let upp = str.toUpperCase();
  let sum = 0;
  for(let i = 0; i < str.length; i++)
      if(upp[i] !== str[i])  sum++;
  return sum;
}
