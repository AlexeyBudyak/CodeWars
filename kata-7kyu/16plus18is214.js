function add(num1, num2) {
  let str_num1 = num1 + '';
  let str_num2 = num2 + '';
  let l = Math.max(str_num1.length, str_num2.length);
  str_num1 = str_num1.padStart(l,0);
  str_num2 = str_num2.padStart(l,0);
  return +[...str_num1].reduce((total,x,i)=>total + (+x + +str_num2[i]),'');
}
