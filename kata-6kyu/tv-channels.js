function redarr(arr) {
  let obj = {};
  arr = arr.sort();
  for(let i = 0, j = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) === i)
        obj[j++] = arr[i];
  }
  return obj;
}
