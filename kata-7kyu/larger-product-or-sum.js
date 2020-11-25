function sumOrProduct(array, n) {
  let sum = 0;
  let product = 1;
  array = array.sort((a,b)=> a - b);
  for(let i = 0; i < n; i++){
    sum += array[array.length - 1 - i];
    product *= array[i];
  }
  if(sum === product)  return 'same';
  if(sum > product)  return 'sum';
                else  return 'product';  
}
