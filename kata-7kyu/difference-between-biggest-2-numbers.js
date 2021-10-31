function diffBig2(arr) {
  const max1 = Math.max(...arr);
  const maxIndex = arr.indexOf(max1);
  arr = arr.filter((el,i) => i != maxIndex);
  const max2 = Math.max(...arr);
  return max1 - max2;
}
