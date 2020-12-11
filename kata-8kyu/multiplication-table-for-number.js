function multiTable(n) {
  let str = '';
  for(let i = 1; i<= 10; i++)  
    str+= `${i} * ${n} = ${i * n}${i < 10 ? '\n' : ''}`;
  return str;
}
