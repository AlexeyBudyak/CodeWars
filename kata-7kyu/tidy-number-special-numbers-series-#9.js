function tidyNumber(n){
  return (n+'').split('').every((el,i,arr)=> i === arr.length-1 || el <= arr[i+1]);
}
