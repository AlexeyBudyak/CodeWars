function bitsWar(numbers) {
  const bin = numbers.map(el=> el.toString(2))
  sum = 0;
  for(let i in numbers){
    digit = bin[i][bin[i].length - 1];
    let n = bin[i].replace(/[^1]/g,"").length;
    let sign = 2 * ((digit === '1' && bin[i][0] !== '-') || (digit === '0' && bin[i][0] === '-')) - 1;
    sum = sum + n * sign;
  }
  return !sum ? 'tie' : ['evens', 'odds'][+(sum > 0)] + ' win';
}
