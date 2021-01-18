function removeOrAdd(s){
  return s.split(' ')
    .map(el => (el[el.length - 1] !== '!') ? el + '!' 
                                           : (el[el.length - 2] === '!') ? el
                                           : el.slice(0,-1)).join(' '); 
}
