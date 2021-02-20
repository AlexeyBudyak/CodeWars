function calculateWinners(snapshot, penguins) {
  return  snapshot.replace(/[~]/g,'--')
                  .toLowerCase()
                  .split('\n')
                  .filter(el=>el)
                  .map((el,i)=>el.slice(el.indexOf('p')).length + ':' + penguins[i])
                  .sort((a,b)=>a.split(':')[0]-b.split(':')[0])
                  .slice(0,3)
                  .map((el,i)=>['GOLD','SILVER','BRONZE'][i] + ': ' + el.split(':')[1])
                  .join(', ')
  };
