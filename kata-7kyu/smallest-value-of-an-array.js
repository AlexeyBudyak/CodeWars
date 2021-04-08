function min(arr, toReturn) {
  const min = Math.min(...arr);
  return toReturn === 'index' ? arr.indexOf(min) : min;
}
