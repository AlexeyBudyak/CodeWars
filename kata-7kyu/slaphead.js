function bald(x){
  const style = ['Clean!', 'Unicorn!','Homer!','Careless!','Careless!','Careless!'];
  const n = x.split('').filter(el=>el === '/').length;
  return [x.split('').map(()=>'-').join(''), n > 5 ? 'Hobo!' : style[n]]; 
}
