function getAverage(marks){
  return Math.floor(marks.reduce((sum,m)=>sum + m, 0)/marks.length);
}
