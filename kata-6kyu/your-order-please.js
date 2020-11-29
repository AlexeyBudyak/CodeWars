function N(arr, n){
  for(i = 0; i < arr.length; i++)
    if(arr[i].includes(n + ''))  return i;
}
function order(words){
  words = words.split(' ');
  const result = [];
  for(let i = 1; i <= words.length; i++)
    result.push(words[N(words, i)]);
  return result.join(' ');
}
