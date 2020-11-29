function findEvenIndex(arr)
{
  const total = arr.reduce((a,b)=>a+b,0);
  for(let i = 0, sum = 0; i < arr.length; i++){ 
    if((total - arr[i]) / 2 === sum)  return i;
    sum+= arr[i];
  }
  return -1;
}
