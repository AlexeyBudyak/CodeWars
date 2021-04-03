function smallestInteger(matrix) {
  matrix = [].concat(...matrix);
  const set = [...Array(matrix.length+1).keys()]
  return set.filter(el=>!(matrix.includes(el)))[0];
}
