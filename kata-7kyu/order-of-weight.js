function convertWeight(n){
  if(n.includes('KG'))  return +n.replace(/KG/,'');
  if(n.includes('T'))  return n.replace(/T/,'') * 1000;
  return n.replace(/G/,'') / 1000;
}
function arrange(arr){
  return arr.sort((a,b)=>convertWeight(a) - convertWeight(b))
}
