function sizeCheck(arr){
  return arr.sort((a,b) => b.length - a.length)[0].length;
}
function longestRepetition(s) {
  let a = s.split('')
          .map((el,i) => el === s[i - 1] ? el : ' ' + el)
          .join('').split(' ');
  const size = sizeCheck([...a]);
  a = a.filter(el => el.length === size)[0];
  return [a[0] || a, size];
}
