function logicalCalc(array, op){
  switch(op){
  case 'AND':  return array.every(el=>el);
  case 'OR':  return array.reduce((sum,x) => sum || x,false);
  case 'XOR':  return !!array.reduce((sum,x) => sum ^ x,false);
  }
 }
