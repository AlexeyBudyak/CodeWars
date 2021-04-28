function coolString(s) {
  if (s.replace(/[a-z]/ig,''))  return false
  return s.slice(0,-1).split('').every((_,i)=> (s[i] === s[i].toLowerCase()) !==
                            (s[i+1] === s[i+1].toLowerCase()))
}
