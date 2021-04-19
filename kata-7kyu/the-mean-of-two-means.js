function calculateMean(...arr) {
  return arr.reduce((a,b)=> a + b, 0) / arr.length;
};

function getMean(arr, x, y) {
  if(Math.min(x,y) < 2 || Math.max(x,y) > arr.length)  return -1;
  return calculateMean(calculateMean(...arr.slice(0,x)),
                       calculateMean(...arr.slice(arr.length - y)))
}
