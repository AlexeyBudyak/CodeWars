function presses(phrase) {
  const press = ['', '1ADGJMPTW ', '0BEHKNQUX', 'CFILORVY', 'SZ234568', '79'];
  let s = 0;
  for(let i in phrase.split(''))
    for(let j in press)
      if(press[j].includes(phrase[i].toUpperCase()))  
        {  s+= +j;  continue;}
  return s;
}
