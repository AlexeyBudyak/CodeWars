var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = humanYears * 4;
  let dogYears = humanYears * 5;
  if(humanYears >= 1)  catYears+= 11, dogYears+= 10;
  if(humanYears >= 2)  catYears+= 5, dogYears+= 4;
  return [humanYears, catYears, dogYears];
}
