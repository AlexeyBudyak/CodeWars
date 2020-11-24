function giveMeFive(obj){
  let arr = Object.entries(obj);
  let result = [];
  for (var prop in obj){}
  for(let i = 0; i < arr.length; i++){  
    if(arr[i][0].length === 5)  result.push(arr[i][0]);
    if(arr[i][1].length === 5)  result.push(arr[i][1]);
  }
  return result;
}
