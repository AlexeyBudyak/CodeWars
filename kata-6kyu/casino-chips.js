function solve(arr){
  arr = arr.sort((a,b)=> b - a);
  let day = arr[2];
  const gap = arr[0] - arr[1];
  if(gap < day){
    arr[2]-= gap;
    arr[0]-= Math.floor(arr[2]/2);
    arr[1]-= Math.ceil(arr[2]/2);
  }  else  arr[0]-= day;
  day+= Math.min(arr[0], arr[1]);  
  return day;
}
