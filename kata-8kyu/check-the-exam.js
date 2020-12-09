function checkExam(array1, array2) {
 const score = array2.reduce((s, a, i) => s + (a === '' ? 0 : a === array1[i] ? 4 : -1), 0);
  return score < 0 ? 0 : score;
}
