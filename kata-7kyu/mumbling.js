function accum(s) {
  let mumbl = s[0].toUpperCase();
  for(let i = 1; i < s.length; i++){
    mumbl+= '-' + s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
  }
  return mumbl;
}
