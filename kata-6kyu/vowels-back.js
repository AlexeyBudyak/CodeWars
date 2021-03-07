function vowelBack(s){
  //             abcdefghijklmnopqrstuvwxyz
  const codes = 'vkbaafpqistuvwnyzabtpvfghi';
  return s.split('').map(el=>codes[el.charCodeAt(0)-97]).join('')
}
