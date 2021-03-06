let findClosestNumber=(arr,num)=>{
  const arrMin = arr.map(el=>Math.abs(Math.abs(el)-num));
  return arr[arrMin.indexOf(Math.min(...arrMin))];
}
