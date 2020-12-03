function list(names){
  return !names.length ? ''
         : names.map(el=>el.name).slice(0,-1).join(', ')
          + (names.length > 1 ? ( ' & ') : '') 
          + names[names.length-1].name;
}
