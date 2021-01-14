function none(arr, fun){
  return arr.filter(item => fun(item)).length === 0;
}
