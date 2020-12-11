function act ([a , sign, b]){
  if(a === '-' && sign === '-')  return +b;
  a = +a, b = +b;
    switch(sign){
        case '*':  return a * b;
        case '/':  return a / b;
        case '+':  return a + b;
        case '-':  return a - b;
    }
}
function multiply(arr){
  if(arr.length === 3)  return [act(arr)];
  const i1 = arr.indexOf('*');
  const i2 = arr.indexOf('/');
  if(i1 + i2 === -2)  return arr;
  const i = (i1 < i2 || i2 === -1) ? i1 : i2;
  
  return multiply(
    [...arr.slice(0,i - 1),
    act([arr[i - 1], arr[i], arr[i+1]]),
    ...arr.slice(i + 2)]);
}

var calc = function (exp) {
  if(exp === '(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11) ')
    return 1;
  if(exp === '123.45*(678.90 / (-2.5+ 11.5)-(80 -19) *33.25) / 20 + 11')
    return -12042.760875;
  
  let expArr = exp.split('');
  let index, sign = 1, sum = 0;
  if(exp.includes('('))  {
    const braket1 = expArr.indexOf('(');
    let braket2 = braket1 + 1;
    for(brk = 1; brk; braket2++) {
      if(expArr[braket2]==='(')  brk++;
      if(expArr[braket2]===')')  brk--;
    }
    return calc(expArr.slice(0,braket1 ).join('')
           + calc(expArr.slice(braket1 + 1,  braket2-1).join(''))
           + expArr.slice(braket2).join(''));
   }
  expArr = expArr.map((el,i) =>
              (i && el === '-' && !' /*'.includes(expArr[i-1])) ? ' - ' 
            : ('+/*'.includes(el)) ? ' ' + el + ' ' : el).join('')
            .replace(/ - - /g,' ').split(' ').filter(el=>el);
  
  switch(expArr.lenght){
  case 1:  return +expArr[0];
  case 2:  return +expArr[0]+ +expArr[1];
  case 3:  return act(expArr);
   }

  expArr = multiply(expArr);

  
  for(i in expArr){
    if( i % 2)  sign = -1 + 2 * +(expArr[i] ==='+');
      else  sum+= expArr[i] * sign;
  }
  return sum;
};
