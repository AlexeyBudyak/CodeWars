function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).filter((el,i,arr)=>arr.indexOf(el)===i).sort((a,b)=>a-b);
}
