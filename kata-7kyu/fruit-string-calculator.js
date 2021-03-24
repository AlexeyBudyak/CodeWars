function calculate(string) {
  return eval(string.replace('loses','-')
               .replace('gains','+')
               .replace(/[A-Za-z]/g,''));
}
