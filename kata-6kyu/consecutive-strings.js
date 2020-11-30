function longestConsec(strarr, k) {
  if(strarr.length < k || k <= 0)  return '';
  const options = [], sizes = [];
  for(let i = 0; i <= strarr.length - k; i++)
      options.push(strarr.slice(i, i + k).join('')), sizes.push(options[i].length);
  return options[sizes.indexOf(Math.max(...sizes))];
}
