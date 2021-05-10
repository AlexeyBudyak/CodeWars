function pairZeros(arr) {
  let k = true;
  new_arr = [];
  for(i in arr){
    if(k || arr[i])  new_arr.push(arr[i]);
    if(!arr[i])  k = !k;
  }
  console.log(new_arr)
  return new_arr;
}
