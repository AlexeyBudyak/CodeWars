function iqTest(numbers){
  numbers = numbers.split(' ');
  const even = numbers.filter(el => !(el % 2));
  const odd = numbers.filter(el => el % 2);
  return numbers.indexOf(even.length === 1 ? even[0] : odd[0]) + 1;
}
