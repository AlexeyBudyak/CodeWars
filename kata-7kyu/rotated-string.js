function isRotation(s1, s2){ 
  for(let i = 1; i < s1.length; i++)
      if (s1.slice(i) + s1.slice(0,i) === s2) return true;
  return s1 === s2;
}
