function bodyCount(code) {
  const mask = 'A8A8A8A8A8.-A%8.88.';
  const rule = { A: (x)=> /[A-Z]/.test(x),
                 '8':(x)=> /[0-9]/.test(x),
                 '.':()=>'.', '-':()=>'-','%':()=>'%'};
  console.log(code)
  code = code.split(' ').filter(el => el.length > 18)[0] || ''; 
  return code.length > 18 &&  [...mask].every((el,i)=> rule[el](code[i]));
}
