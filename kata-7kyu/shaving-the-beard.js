function trim(x){
  return x.map((el,i)=> i === x.length - 1 
               ? Array(el.length).fill('...') 
               : el.map(hair=>hair === 'J' ? '|' : hair))
}
