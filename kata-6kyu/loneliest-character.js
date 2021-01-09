function loneliest(str) {
  str = str.trim();
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  let abcN = new Array (26).fill(-1);
  let preN = 0, afterN = 0;
  let char1 = '', char2 = '';
  for(let i = 0; i <= str.length; i++){
    if(str[i]!==' '){
      char1 = char2, char2 = str[i];
      if(char1)  abcN[abc.indexOf(char1)]  = preN + afterN;
      preN = afterN, afterN = 0;
    } else afterN++;
  }
  const max = Math.max(...abcN);
  return abcN.map((el,i)=> el === max ? abc[i] : '').filter(el=>el);
}
