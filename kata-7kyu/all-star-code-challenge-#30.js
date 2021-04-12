var manCave = function(array){
  return   array.some(el=> el.name === 'Raj')
            ? array.filter(el=>el.gender === 'male')
              .map(el=> {el.status = 'Single'; return el;})
            : array;
}
