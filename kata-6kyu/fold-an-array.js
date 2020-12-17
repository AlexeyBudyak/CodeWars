function foldArray(array, runs)
{
  if(!runs || array.length === 1)  return array;
  let arrFold = array.slice(0,-(~~(array.length/2)))
                .map((el,i, arr)=> i === arr.length - 1 && array.length % 2 ? el 
                     : el + array[array.length - 1 - i]);
  return foldArray(arrFold, runs - 1);
}
