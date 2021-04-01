function filterLongWords(sentence, n) {
  return sentence.split(' ').filter(el=>el.length>n);
}
