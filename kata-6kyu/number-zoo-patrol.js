function findNumber(array) {
  return array.reduce((s,x,i) => s = s ^ x ^ (i+1), 0 ) ^ (array.length + 1)
}
