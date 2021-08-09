function voltage(arr,total){
  var sum = arr.reduce((x,y) => x+y);
  return arr.map(x => +(total*x/sum).toFixed(2));
}
