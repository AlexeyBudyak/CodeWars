function solve(x, y) {
  let s = 0;
  const codes = ['0', '1', '', '', '', '', '9', '', '8', '6'];
  for(let i = x; i < y; i++)
    if(i+'' === (i+'').split('').reverse().map(el=>codes[el]).join(''))  s++;
  return s;
};
