function scramble(str, arr) {
  let result = Array(str.length).fill('');
  arr.forEach((newIndex,oldIndex) => result[newIndex] = str[oldIndex]);
  return result.join("");
};
