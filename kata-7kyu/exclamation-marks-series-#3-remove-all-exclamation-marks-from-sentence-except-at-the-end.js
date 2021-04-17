function remove(s){
  let keep = true;
  return s.split('')
          .reverse()
          .map(el=> el !== '!' ? (keep = false, el) : keep ? el : '')
          .reverse()
          .join('');        
}
