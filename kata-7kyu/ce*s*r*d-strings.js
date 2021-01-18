function uncensor(infected, discovered) {
  let str = '';
  for(let i = 0, j = 0; i < infected.length; i++)
    if(infected[i] === '*')  str+= discovered[j++];
                      else   str+= infected[i];
  return str;
}
