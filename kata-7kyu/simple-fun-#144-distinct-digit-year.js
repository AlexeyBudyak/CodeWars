function distinctDigitYear(year) {
  while((++year + '').split('').filter((x,i,arr) => arr.indexOf(x) === i).length 
        !== (year + '').length);
  return year;
}
