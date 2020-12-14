function count(str, c){
  return str.split('').filter(el=> el === c).length;
}
function forRecord(n1, n2, c){
  if (n1 < 2 && n2 < 2)  return '';
  const prefix = (n1 === n2) ? '=' : (n1 > n2) ? '1' : '2';
  return prefix + ':' + c.repeat(Math.max(n1,n2));
}
function compare(str1, str2){
  if(str1.length !== str2.length)  return str1.length - str2.length;
  for(let i = 0; i< str1.length; i++)
    if(str1.charCodeAt(i)!==str2.charCodeAt(i))  
      return str2.charCodeAt(i)-str1.charCodeAt(i);
  return 0;
}
function mix(s1, s2) {
  return 'abcdefghijklmnopqrstuvwxyz'.split('')
         .map(el=> forRecord(count(s1,el),count(s2,el),el) ).filter(el=>el)
         .sort((a,b)=>compare(b,a)).join('/');
}
