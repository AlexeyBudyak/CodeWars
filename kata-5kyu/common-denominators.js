function getD(num, root) {
  if(num <= 1)  return false;
   for(let i = 2; i <= root; i++) 
        if(num % i == 0) return i;
  return false;
}

function toBase(n){
  const root = Math.floor(Math.sqrt(n));
  const D = getD(n, root);
  if(!D)  return [n];
  return [D, ...toBase(n/D)];
}
function compareArr(arr1, arr2){
  const com = [];
  for(let i = 0; i < arr1.length; i++)
    for(let j = 0; j < arr2.length; j++)
      if(arr1[i] === arr2[j])
        com.push(arr1[i]), arr1[i] = 1, arr2[j] = 1; 
 return [...com,...arr1, ...arr2];
}

function convertFrac(lst){
  if(!lst.length)  return '';
  let d = toBase(lst[0][1]);
  for(let i = 1; i< lst.length; i++)
    d = compareArr(d,toBase(lst[i][1]));
  const LCD = d.reduce((p,x)=> p * x, 1);
  return lst.map(el=>'(' + el[0] * (LCD / el[1]) + ',' + LCD + ')').join('');
}
