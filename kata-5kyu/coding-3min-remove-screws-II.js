function mode1(screws){
  let sec = 0
  screwdriver = screws[0]
  for(let i = 0; i < screws.length; i++)
    if(screwdriver != screws[i])
      screwdriver = screws[i], sec+= 5;
  sec+= screws.length * 2 - 1;
  return sec;
}
function mode2(screws){
  let otherScrewdriver = {'+':'-','-':'+'}[screws[0]]
  let position2 = screws.lastIndexOf(screws[0])
  let position3 = screws.lastIndexOf(otherScrewdriver)
  let position4 = screws.indexOf(otherScrewdriver)
  if(position2 === -1 || position3 === -1)
    return screws.length * 2 - 1
  let sec = position2 + Math.min(Math.abs(position3 - position2), Math.abs(position4 - position2)) + Math.abs(position3 - position4) + 5 + screws.length;
  return sec;
}

function sc(screws){
  return Math.min(mode1(screws), mode2(screws))
}
