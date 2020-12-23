var moveZeros = function (arr) {
  return [...arr.filter(el => el !== 0), ...arr.filter(el=> el === 0)];
}
