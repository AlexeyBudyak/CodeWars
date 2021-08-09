function halfIt(s){
  let chars = {}
  result = ''
  for(let i in s)
    chars[s[i]] =  (chars[s[i]] || 0) + 1
  for(let i in s)
    if(chars[s[i]] > 0){
      chars[s[i]]-= 2;
      result+= s[i];
    }
  return result;
}
