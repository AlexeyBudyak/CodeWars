function shadesOfGrey(n){
  shades = []
  for(let i = 1; i <= Math.min(n,254) ; i++)
    shades.push("#" + i.toString(16).padStart(2, "0").repeat(3))
  return shades
}
