function nextHappyYear(year){
  let digits;
  do{
    year++;
    digits = (year+'').split('').sort();  
  }while(!(digits[0] < digits[1] && digits[1] < digits[2] && digits[2] < digits[3]));
  return year;
}
