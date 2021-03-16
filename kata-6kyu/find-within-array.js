var findInArray = function(array, iterator) {
  for(let i = 0; i < array.length; i++)
    if(iterator(array[i],i))  return i;
  return -1;
};

// Best solutions:

// const findInArray = (array, iterator) => array.findIndex(iterator)

// var findInArray = function(array, iterator) {
//   return array.map(iterator).indexOf(true);
// };
