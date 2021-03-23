function replaceAll(seq, find, replace) {
  if(typeof seq === 'string')  return seq.split('').map(el => el === find ? replace : el).join('');
  return seq.map(el => el === find ? replace : el);
}
