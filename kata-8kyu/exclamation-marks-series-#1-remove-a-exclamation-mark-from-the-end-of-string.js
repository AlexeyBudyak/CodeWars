function remove(s){
  return s.split('').slice(0,s.length - +(s[s.length - 1] === '!')).join('');
}
