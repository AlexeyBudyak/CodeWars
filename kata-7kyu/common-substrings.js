function SubstringTest(str1, str2)
{
  if(str2.length < 2)  return false;
  const subArr = Array(str2.length-1).fill(0).map((_,i)=>str2.slice(i,i+2).toLowerCase());
  return subArr.some(el=> str1.toLowerCase().includes(el));
}
