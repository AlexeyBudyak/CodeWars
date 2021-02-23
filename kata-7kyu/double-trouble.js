function trouble(x, t){
  for(let i = 1; i < x.length; i++)
    if(x[i] + x[i-1] === t)  {x = x.filter((_,j)=>j !== i);  i = 0;}
  return x;
}
