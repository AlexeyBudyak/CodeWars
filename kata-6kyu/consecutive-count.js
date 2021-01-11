function getConsectiveItems(items, key){
  return Math.max(...(items + '').split('').map(el=>el == key ? el : ' ')
                                 .join('') .split(' ').map(el=>el.length));      
}
