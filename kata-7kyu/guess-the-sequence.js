function sequence(x) {
  return [...Array(x).keys()].map(el=>el+1).sort();
}
