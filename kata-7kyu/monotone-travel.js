var isMonotone = function(arr){
  return arr.reduce((sum,x,i)=> sum ? i === 0 || x>= arr[i-1] : false, true);
}
