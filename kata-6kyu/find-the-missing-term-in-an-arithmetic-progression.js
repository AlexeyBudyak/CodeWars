var findMissing = function (list) {  
  const a = list[1] - list[0], b = list[2] - list[1];
  const step = (a === b) ? a : (b === a * 2) ? a : b;
  let i = list[0];
  while(list.indexOf(i) >= 0)  i+= step;
  return i;
}
