function nameInStr(str, name){
  name = name.toLowerCase().split('');
  str = str.toLowerCase().split('')
  let j = 0
  let check = [];
  for(let i = 0; i < name.length; i++)
    for(; j < str.length; j++)
      if(name[i] === str[j])  {str = str.map((el,k)=> (k === j) ? i : el); break;}
  str = str.filter(el => '0123456789'.includes(el));
  return name.every((_,i) => str[i] === i);
}
