function sumPairs(arr, s) {
  let mm = [...arr].sort((a,b)=>a-b);
  const min = mm[0];
  const max = mm[mm.length-1];
  
  arr = arr.filter((el,i) => min + el <= s && max + el >= s 
                   && (arr.indexOf(el) === i || el === s / 2));

  for(let i = 1; i < arr.length; i++)
    for(let j = 0; j < i; j++)
      if(arr[i] + arr[j] === s)  return [arr[j],arr[i]];
  return undefined ;
}
