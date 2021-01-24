function solve(s){
  return s.replace(/[^oeaiu]/g,'*').split('*').sort((a,b)=>b.length - a.length)[0].length;
}
