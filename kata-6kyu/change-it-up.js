function changer(str) { 
  const code = "abcdefghijklmnopqrstuvwxyza";
  return str.toLowerCase()
            .replace(/[a-z]/g, x => code[code.indexOf(x)+1])
            .replace(/[aeiou]/g, x => x.toUpperCase());                     
}
