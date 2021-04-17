function remove(s,n){
  for(let i = 0; i < n && s.includes('!'); i++)  s = s.replace('!','');
  return s;
}
