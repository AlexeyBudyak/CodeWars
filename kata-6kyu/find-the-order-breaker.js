function orderBreaker(input) { 
  for(let i = 0; i < input.length; i++) 
    if(input.filter((el,j)=>j!==i).every((el,k,arr)=> el >= arr[k - 1] || !k) )
      return input[i];
}
