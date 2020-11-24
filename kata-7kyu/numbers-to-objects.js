function numObj(s){
  let obj = [];
  for(let i = 0; i < s.length; i++){
    obj[i] = new Object;
    obj[i][s[i]] = String.fromCharCode(s[i]);
  }
  return obj;
}
