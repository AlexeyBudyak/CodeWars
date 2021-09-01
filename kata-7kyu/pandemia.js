function infected(s) {
  return s.split('X')
          .filter(el=> el.includes('1')).join('').length 
         / s.replace(/[X]/g,'').length * 100 || 0;
}
