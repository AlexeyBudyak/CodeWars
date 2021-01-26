function upArray(arr){
  return arr.length == 0 || arr.some(el=> el<0 || el > 9)  ? null 
  : (arr[arr.length - 1] < 9) ? [...arr.slice(0,-1), arr[arr.length - 1] + 1] 
  : arr.length === 1 ? [1, 0] : [...upArray(arr.slice(0,-1)), 0];
}
