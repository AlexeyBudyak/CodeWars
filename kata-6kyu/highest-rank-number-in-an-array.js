function highestRank(arr){
  let score = arr.map(el => arr.filter(x => x === el).length);
  return arr[score.indexOf(Math.max(...score))];
}
