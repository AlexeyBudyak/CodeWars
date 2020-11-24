function interweave(...s) {
  let str = '';
  for(let i = 0; i < (s[0] + s[1]).length; i++)
    if(!'0123456789'.includes(s[i % 2][~~(i/2)]))
      str+= s[i % 2][~~(i/2)];
  return str; 
}
