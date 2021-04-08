function solve(arr){
  const minSort = [...arr.sort((a,b)=>a-b)];
  const maxSort = [...arr.sort((a,b)=>b-a)];
  return arr.map((_,i)=>i % 2 ? minSort[(i-1)/2] : maxSort[i/2])
};
