var uniqueInOrder=function(iterable){
  if( !iterable.length)  return [];
  let arr = [iterable[0]];
  for(let i = 1; i < iterable.length; i++)
    if(iterable[i] !== arr[arr.length-1])  arr.push(iterable[i]);
  return arr;
}
