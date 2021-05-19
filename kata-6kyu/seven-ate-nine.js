function hungrySeven(arr){
  str = arr.join('');
  while(str.includes('789'))
    str = str.replace('789','897');
  return str.split('').map(el=>+el)
}
