function validateWord(s)
{
  s = s.toLowerCase();
  const obj = {};
  s.split('').forEach(el=>obj[el] ? obj[el]++ : obj[el] = 1);
  return s.split('').every(el => obj[el] === obj[s[0]]);
}
