var paintLetterboxes = function(start, end) {
  let str = '';
  for(let i = start; i <= end; i++)  str+= i;
  str = str.split('');
  return Array(10).fill(0).map((_,i) => str.filter(el=> el == i).length);
}
