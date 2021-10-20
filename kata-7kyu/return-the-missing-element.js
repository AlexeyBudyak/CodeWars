function getMissingElement(arr){
  // 0 ^ 1 ^ 2  ^ 3 ^ 4 ^ 5 ^ 6 ^ 7 ^ 8 ^ 9 == 1
  return arr.reduce((s,x)=> s = s ^ x) ^ 1;
}

// function getMissingElement(arr){
//   return 45 - arr.reduce((s,x)=> s = s + x, 0);
// }
