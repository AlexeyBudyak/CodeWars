function alphabetPosition(text) {
  const abc = '*abcdefghijklmnopqrstuvwxyz';
  return text.toLowerCase().split('').map(el=>abc.indexOf(el)).filter(n=> n > 0).join(' ');
}
