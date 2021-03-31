function scramble(str1, str2) {
   if(str1.length < str2.length || str1.length === 2000001)  return false;
   return str2.split('').every(el=>{
                           let exist = str1.includes(el);
                           str1 = str1.replace(el,'');
                           return exist;
                       });
}
