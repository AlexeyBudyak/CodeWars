const sum = (arr) =>{
  return arr.reduce((sum,x)=> sum + x, 0);
}
function peak(arr){
  for(let i = 1; i < arr.length - 1; i++)
    if(sum(arr.slice(0,i) ) === sum(arr.slice(i+1)))
       return i;
  return -1;
}
