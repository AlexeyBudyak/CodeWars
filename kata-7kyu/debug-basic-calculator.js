function calculate(a, o, b) {
  switch(o){
      case '+':  return a + b;
      case '-':  return a - b;
      case '*':  return a * b;
      case '/':  return b ? a / b : null;
      default:  return null;
  }
}
