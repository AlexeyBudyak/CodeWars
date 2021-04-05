function displayValue(value) {
  const names = ['month', 'week', 'day', 'hour', 'minute'];
  const scale = [12, 4, 7, 24, 60];
  return scale.map((el,i) =>(~~(value / scale.slice(i+1).reduce((a,b)=>a*b,1) )) % el)
              .map((el,i) => !el ? '' : el + ' ' + names[i] + (el > 1 ? 's' : '') )
              .filter(el=>el).join(' ');
}
