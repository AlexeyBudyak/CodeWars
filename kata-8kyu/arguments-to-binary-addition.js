function arr2bin(arr){
  return arr.reduce((a,b)=>a+ (typeof b === 'number' ? b : 0) ,0).toString(2);
}
