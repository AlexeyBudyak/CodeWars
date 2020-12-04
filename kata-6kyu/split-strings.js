function solution(str){
   if(str.length % 2)  str+= '_';
  return str.split('').map((el,i)=> !(i % 2) ? el + str[i + 1] : '').filter(el=>el);
}
