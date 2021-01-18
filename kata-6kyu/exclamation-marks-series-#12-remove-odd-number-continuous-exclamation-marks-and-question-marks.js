function remove(s){
   const s2 = s.split('')
           .map((el, i) => (i && el !== s[i - 1]) ? ' ' + el : el)
           .join('')
           .split(' ')
           .filter(el => el.length < 3 || el.length % 2 === 0)
           .join('');
  return s.length === s2.length ? s2 : remove(s2);
}
