function testit(s){
  let result = '';
  for(let i = 0; i < s.length; i++)
    result += (i === s.length - 1  || s[i + 1] === ' ')  ? s[i].toUpperCase() : s[i];
  return result;
}
