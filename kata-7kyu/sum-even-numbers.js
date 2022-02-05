function sumEvenNumbers(input) {
  return input.reduce((sum,x) => sum + (x % 2 == 0) * x, 0);
}
