function sortArray(a1, a2) {
  const indexes = a1.map(el=>el[0]).join('');
  let a3 = [...a2];
  a2.forEach(el=> a3[indexes.indexOf(el[0])] = el);
  return a3;
}
