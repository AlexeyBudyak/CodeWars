function solve(arr){  
  return arr.map(word => word.toLowerCase().split('').reduce((s,x,i)=> s+= (x.charCodeAt(0) - 97 === i), 0));
};
