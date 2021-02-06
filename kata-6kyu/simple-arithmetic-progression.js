function solve(arr){
  let num = 0;
  for(let i = 1; i < arr.length - 1; i++)
    for(let j = 0; j< i; j++)
      if(arr.includes(arr[i] * 2 - arr[j]))  num++;  
  return num;
}
