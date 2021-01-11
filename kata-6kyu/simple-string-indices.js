function solve(str,idx){
  if(str[idx] !== '(')  return -1;
  let n = 1;
  while(n)  {
    if(str[idx + 1] === ')')  n--;
    if(str[idx + 1] === '(')  n++;
    idx++;
  }
  return idx;
}
