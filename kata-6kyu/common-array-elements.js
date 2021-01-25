const sizeX = (x, a) => a.filter(el => el === x).length;

function sumX(x, a, b, c){
  if (a.indexOf(x) === a.lastIndexOf(x) || 
      b.indexOf(x) === b.lastIndexOf(x) ||
      c.indexOf(x) === c.lastIndexOf(x))  return x;
  const sizeA = sizeX(x, a);
  if(sizeA === 2)  return x * 2;
  const sizeB = sizeX(x, b);
  if(sizeB === 2)  return x * 2;
  
  return Math.min(sizeA, sizeB, sizeX(x, c)) * x;
}

function common(a,b,c){
  console.log([111,11].includes(1))
  return a.filter((el,i)=>a.indexOf(el) === i && b.includes(el) && c.includes(el))
          .reduce((sum, x) => sum + sumX(x,a,b,c) ,0)
}
