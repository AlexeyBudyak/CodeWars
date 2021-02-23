function mineLocation(field){
  const y = field.map(el=> el.reduce((a,b)=>a+b,0)).indexOf(1);
  const x = field[y].indexOf(1);
  return [y,x];
}
