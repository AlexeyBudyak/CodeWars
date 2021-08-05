function sc(array){
  let max = array[0] + array[1];
  for(let i = 0; i < array.length - 1; i++)
    for( let j = i + 1; j < array.length; j++){
      max = Math.max(max, array[i] + array[j]);
      max = Math.max(max, array[i] - array[j]);
      max = Math.max(max, array[j] - array[i]);
      max = Math.max(max, array[i] * array[j]);
      if(array[j])  max = Math.max(max, array[i] / array[j]);
      if(array[i])  max = Math.max(max, array[j] / array[i]);
    }
  return max
}
