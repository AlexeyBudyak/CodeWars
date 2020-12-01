function sortArray(array) {
  let temp;
  for(let i = 0; i < array.length - 1; i++)
    for(let j = i + 1; j < array.length; j++)
      if(array[i] % 2 && array[j] % 2 && array[i] > array[j])
        temp = array[i], array[i] = array[j], array[j] = temp, i = 0; 
  return array;
}
