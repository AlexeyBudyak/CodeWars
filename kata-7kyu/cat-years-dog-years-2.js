function yearsCount(years, animal){
  console.log(years);
  years-= 14
  if(years <= 0)  years = 0;
            else if(years > 9)  years-= 8;
                           else years = 1;
  if(years > 2)  years = 2 + ~~((years - 2) / (4 + animal));
  return years;
}

var ownedCatAndDog = function(catYears, dogYears) {
  return [yearsCount(catYears, 0),yearsCount(dogYears, 1)];
}
