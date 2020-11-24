function cleanString(s) {
  let index1, index2;
  while(s.includes('#'))  {
    index1 = s.indexOf('#') - 1;
    index2 = index1 + 2;
    if(index1 < 0) index1 = 0;
    s = s.slice(0, index1) + s.slice(index2);
   }
  return s;
};
