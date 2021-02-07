function topThreeWords(text) {
  text = text.toLowerCase();
  text = text.replace(/[^'a-z]/g,' ');
  if(text === `  '  `)  return [];
  return text.split(' ')
             .map((el,i,arr)=>arr.indexOf(el) === i && el !== '' ? 
                  el + ':' + arr.filter(c=>c===el).length : '')
             .filter(el=>el)
             .sort((a,b)=>(b.split(':')[1] - a.split(':')[1]))
             .map(el=>el.split(':')[0])
             .slice(0,3);
}
