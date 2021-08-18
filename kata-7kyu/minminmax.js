function minMinMax(array) {
  let min = Math.min(...array);
  let max = Math.max(...array);
  let min2 = min + 1;
  for(; min2 < max && array.includes(min2); min2++);
  return [min, min2, max];
}
