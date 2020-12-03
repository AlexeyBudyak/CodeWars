function deleteNth(arr,n){
  return pics = arr.filter((pic,i) => arr.slice(0, i).filter(el=>el === pic).length < n)
}
