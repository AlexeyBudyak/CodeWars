function toFreud(string) {
  let sum = 0;
  let sex = '';
  if(!string.length)  return sex;
  for(let i = 0; i < string.length; i++)
    if(string[i]===' ')  sum++;
  for(let i = 0; i <= sum; i++){
    if(i)  sex+=' ';
    sex += 'sex';
  }     
  return sex;
}
