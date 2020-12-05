function recursion(lng, wdth){
  const s1 = Math.max(lng, wdth);
  const s2 = Math.min(lng, wdth);
  return s1 === s2 ? [s1] : [s2, ...recursion(s1 - s2, s2)];
}

function sqInRect(lng, wdth){
  return lng === wdth ? null : recursion(lng, wdth);
}
