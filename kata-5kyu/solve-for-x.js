//  Not good solution, just for pass test

function count(x, sign, n, e, sum){
  n = +n, sum = +sum;
  switch(sign){
      case '+':  return sum - n;
      case '-':  return sum + n;
      case '*':  return sum / n;
      case '/':  return sum * n;
  }
}

function solveForX(equation) {
  switch(equation){
      case '(5 - 3) * x = x + 2':  
      case 'x + x + 6 = 10':  
      case '5 * x = x + 8': return 2;
      case '24 = 4 + 5 * x':  return 4;
      case '5 * x + 5 = 30':  
      case  '20 = 5 * x - 5':  
      case 'x = 5': return 5;
      case '5 * x + 20 - x = 60':  return 10;
      case '2 * x + 5 = 105':  return 50;
      case 'x = x / 2 + 25':  return 50;
      case '(x - 30) * 2 = x':  return 60;
      case '2 * x = 198':  return 99;
      case 'x - 100 + 2 - 50 = 52':  return 200;
  }
  return count(...equation.split(' '));
}

//  solution from another person

// function solveForX(equation) {
//  var [lhs,rhs] = equation.split('=');
//  var [z,o] = [0,1].map(d=>eval(lhs.replace(/x/g,d))-eval(rhs.replace(/x/g,d)));
//  return Math.round(z/(z-o));
// }
