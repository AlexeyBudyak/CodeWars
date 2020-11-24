function replaceCommon(string, letter) {
  const abc = 'abcdefghijklmnopqrstuvwxyz '.split('');
  const abcNum = abc.map(el => string.split('').reduce((acc, cur) => acc + !!(cur === el && cur!==' '),0));
  const max = Math.max(...abcNum);
 let i = 0;
  while(abcNum[abc.indexOf(string[i])] < max) i++;
  let needReplace = new RegExp(string[i], 'g')
  return string.replace(needReplace,letter)
}
