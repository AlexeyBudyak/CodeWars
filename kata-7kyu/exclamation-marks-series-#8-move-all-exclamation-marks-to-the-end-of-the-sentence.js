function remove(s){
  let s2 = s.replace(/[!]/g,'')
  return s2 + "!".repeat(s.length - s2.length);
}
