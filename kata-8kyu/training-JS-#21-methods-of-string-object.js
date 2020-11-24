function fiveLine(s){
  s = s.trim();
  let output = s;
  for(let i = 1; i < 5; i++)
    output+= '\n' + s.repeat(i + 1);
  return output;
}
