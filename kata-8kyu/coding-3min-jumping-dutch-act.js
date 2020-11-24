function sc(floor){
  let scream = 'Aa~';
  if(floor < 2)  return '';
  scream+= ' Aa~'.repeat(floor - 2) + ' Pa!';
  if(floor <= 6)  scream+= ' Aa!';
  return scream;
}
