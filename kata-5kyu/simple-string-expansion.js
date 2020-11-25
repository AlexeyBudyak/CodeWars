function solve(str){
  let a, b;
  while(str.includes('(')){
    a = str.lastIndexOf('(');
    b = str.indexOf(')')
    if(str[a - 1] * 1 == str[a - 1])  
      str = str.slice(0, a - 1) + str.slice(a + 1, b).repeat(str[a - 1]) + str.slice(b + 1);
    else
      str = str.slice(0, a) + str.slice(a + 1, b) + str.slice(b + 1);
  }
  return str;
}
