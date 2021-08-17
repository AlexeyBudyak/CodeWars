function typist(s){
  let caps = false
  let n = 0
  for(let i = 0; i < s.length; i++)
    if((s[i] === s[i].toUpperCase()) !== caps)
      n++, caps = !caps;
  return n + s.length
}
