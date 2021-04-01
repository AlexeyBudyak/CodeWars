function closest(arr){
  const absArr = arr.map(el=>Math.abs(el));
  const n = arr[absArr.indexOf(Math.min(...absArr))];
  return (n && arr.includes(-n)) ? null : n;
}
