function sc(screws){
  let sec = 0
  screwdriver = screws[0]
  for(let i = 0; i < screws.length; i++)
    if(screwdriver != screws[i])
      screwdriver = screws[i], sec+= 5;
  return sec + screws.length * 2 - 1;
}
