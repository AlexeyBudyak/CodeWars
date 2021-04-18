function doubles(s){
   const s2 = [...s].map((el,i)=>el===s[i+1] ? el : el+' ')
                .join('')
                .trim()
                .split(' ')
                .map(el=>el.length % 2 ? el[0] : '')
                .join('');
  return s2 === s ? s : doubles(s2);
}
