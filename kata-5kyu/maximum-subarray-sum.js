var maxSequence = function(arr){
  const sum = [];
  for(let i = 0; i < arr.length - 1; i++)
    for(let j = i + 1; j<= arr.length; j++)
      sum.push(arr.slice(i,j).reduce((a,b)=>a+b,0));
  return Math.max(0,...sum);
}
