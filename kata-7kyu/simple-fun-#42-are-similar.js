function areSimilar(A, B) {
  let A2 = A.filter((el,i)=> el !== B[i]);
  let B2 = B.filter((el,i)=> el !== A[i]);
  return A2.length === 0 || (A2.length === 2 && A2[0] === B2[1] && A2[1] === B2[0]);
}
