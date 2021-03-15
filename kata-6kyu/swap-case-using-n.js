function swap(s, n){
  const pattern = ''.padEnd(s.length, n.toString(2));
  s = s.split('')
  const swapCharCase = ch => ch.toLowerCase() === ch ? ch.toUpperCase() : ch.toLowerCase();
  for(let i = 0, j = 0; i < s.length; i++)
    if(s[i].match(/[a-z]/i))  {
      if(pattern[j] === '1')  
        s[i] = swapCharCase(s[i]);
      j++;
    }
  return s.join('');
}
