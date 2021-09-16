function uncollapse(digits){
  const names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  names.forEach(name => digits = digits.split(name).join(name + ' '));
  return digits.slice(0,digits.length-1);
}
