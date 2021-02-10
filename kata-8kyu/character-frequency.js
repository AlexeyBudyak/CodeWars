function charFreq(message) {
  let obj = {};
  message.split('').forEach(el=> obj[el] === undefined ? obj[el] = 1 : obj[el]++);
  return obj;
}
