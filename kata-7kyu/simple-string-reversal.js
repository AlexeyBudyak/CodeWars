function solve(str){
   const rev = str.split('').reverse().filter(el=>el!==' ');
  let i = 0;
  return str.split('').map(el => el === ' ' ? el : rev[i++]).join('');
}
