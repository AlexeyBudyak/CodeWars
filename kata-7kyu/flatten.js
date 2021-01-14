var flatten = function (array){
  if(!array.length)  return [];
  if(array[0].length === undefined)  return array;
  return array[0].concat(...array.slice(1));
}
