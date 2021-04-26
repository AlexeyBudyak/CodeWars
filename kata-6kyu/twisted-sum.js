function countAdjacentPairs(str) {
  let count = 0;
  let same = false;
  const arr = str.toLowerCase().split(' ')
  arr.forEach((el,i)=> !same && el === arr[i+1] ? (count++, same = true) : same = el === arr[i+1] )
  return count;
}
