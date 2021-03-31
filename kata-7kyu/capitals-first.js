function capitalsFirst(str){
  return [ ...str.split(' ').filter(el=>el[0] !== el[0].toLowerCase()),
           ...str.split(' ').filter(el=>el[0] !== el[0].toUpperCase())].join(' ');
}
