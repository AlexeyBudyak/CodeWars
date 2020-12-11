function stray(numbers) {
  numbers = numbers.sort();
  return (numbers[1] === numbers[0]) ? numbers[numbers.length - 1] : numbers[0];
}
