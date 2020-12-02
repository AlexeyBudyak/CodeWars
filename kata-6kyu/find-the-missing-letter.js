function findMissingLetter(array)
{
  while(array[1].charCodeAt() - array[0].charCodeAt() === 1)  array.shift();
  return String.fromCharCode(array[0].charCodeAt() + 1);
}
