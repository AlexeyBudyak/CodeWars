function calculateMean(...arr) {
  return Math.round(arr.reduce((a,b)=> a + b, 0) * 100 / arr.length) / 100;
}
