function sentence(List) {
  const keys = List.map(el => +Object.keys(el)[0]);
  const values = List.map(el => Object.values(el)[0]);
  let temp;
  console.log(keys);
  console.log(values);
  for(let i = 0; i < keys.length - 1; i++)
    for(let j = i + 1; j < keys.length; j++)
      if(keys[j] < keys[i])  
        temp = keys[i], keys[i] = keys[j], keys[j] = temp,
        temp = values[i], values[i] = values[j], values[j] = temp, i = 0, j = 0;
  console.log(keys);
  console.log(values);
  return values.join(' ');
}
