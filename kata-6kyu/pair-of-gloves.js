function numberOfPairs(gloves)
{
  return gloves.map((el, i)=> (i === gloves.indexOf(el)) ? 
                               gloves.reduce((acc,curr) => acc + +(curr === el),0) : 0)
                          .reduce((total, subTotal)=>total + Math.floor(subTotal/2) ,0);
}
