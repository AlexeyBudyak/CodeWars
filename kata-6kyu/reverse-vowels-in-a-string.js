function reverseVowels(str) {
  str = str.split('');
  const vows = str.filter(el => 'aeuioAEUIO'.includes(el));
  return str.map(el => 'aeuioAEUIO'.includes(el) ? vows.pop() : el).join('');
}
