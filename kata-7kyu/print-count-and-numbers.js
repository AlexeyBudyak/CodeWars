function countMe(data){
  if(data.replace(/[^0-9]/,'') !== data || data === '')  return '';
  return data.split('')
             .map((el,i)=>(el !== data[i - 1]) ? ' ' + el : el)
             .join('')
             .split(' ')
             .filter(el=>el)
             .map(el=> '' + el.length + el[0])
             .join('');
}
