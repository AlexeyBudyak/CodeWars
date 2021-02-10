function moveTen(s){ 
  const abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
  return s.split('').map(el=>abc[abc.indexOf(el)+10]).join('');
}
