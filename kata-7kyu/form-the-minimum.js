function minValue(values){
  return +values.filter((el, i) => values.indexOf(el) === i).sort().join('');
}
