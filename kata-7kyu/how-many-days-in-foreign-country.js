function daysRepresented(trips){
  return trips
          .map(el => Array.from(Array(el[1] - el[0] + 1).keys()).map(i => i + el[0]))
          .join(',').split(',')
          .filter((el,i,arr)=> arr.indexOf(el) === i).length;
}
