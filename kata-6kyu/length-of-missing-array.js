function getLengthOfMissingArray(aoa) {
  if(aoa === null || aoa.includes(null) || !aoa.length)  return 0;
  aoa = aoa.map(el=>el.length);
  let i = Math.min(...aoa);
  while(aoa.includes(i) && i)  i++;
  return i;
}
