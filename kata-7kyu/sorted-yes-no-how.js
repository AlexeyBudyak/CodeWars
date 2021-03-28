function isSortedAndHow(array) {
  console.log(array);
  if(array.slice(1).every((el,i)=>el >= array[i]))  return 'yes, ascending';
  if(array.slice(1).every((el,i)=>el <= array[i]))  return 'yes, descending';
  return 'no';
}
