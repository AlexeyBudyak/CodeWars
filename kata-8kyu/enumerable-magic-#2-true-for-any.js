function any(arr, fun){
  return arr.filter(el => fun(el)).length > 0;
}
