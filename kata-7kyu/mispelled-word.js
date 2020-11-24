var mispelled = function(word1, word2)
{
  let max = Math.max(word1.length, word2.length);
  let min = Math.min(word1.length, word2.length);
  if(max - min > 1)  return false;
  if(word1.includes(word2) || word2.includes(word1))  return true;
  if(max - min)  return false;
  let s = 0;
  for(let i = 0; i < max; i++)
    if(word1[i]===word2[i])  s++;
  if(max - s < 2)  return true;
  return false;
}
