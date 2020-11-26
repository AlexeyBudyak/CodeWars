function cutIt(arr){
  let size = arr.reduce((acc,curr) => Math.min(acc, curr.length), arr[0].length);
  return arr.map((el) => el.slice(0,size));  
}
