const calculate = (...arg1) => (...arg2) => {
  return [...arg1,...arg2].reduce((a,b) => a + b, 0);
}
