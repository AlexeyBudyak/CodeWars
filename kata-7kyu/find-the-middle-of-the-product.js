function findMiddle(str){
  if(str === null || typeof str !== 'string')  return -1;
  str = str.replace(/[^0-9]/g,'');
  if(!str)  return -1;
  const p =  str.split('').reduce((a,b)=>a*b,1) + '';
  const l = ~~((p.length-1) / 2);
  return +p.slice(l,p.length-l);
}
