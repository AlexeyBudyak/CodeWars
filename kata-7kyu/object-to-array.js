function arrayToObject(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++)
    if(arr.indexOf(arr[i]) === i)
      obj[arr[i]] = arr.filter(el=>el === arr[i]).length;
   return obj;
}

function objectToArray(obj){
  console.log(obj);
  return Object.keys(obj)
               .map(el=>(el+',').repeat(obj[el]))
               .join('').split(',')
               .filter(el=>el)
               .map(el=>(+el == el) ? +el : el);
}
