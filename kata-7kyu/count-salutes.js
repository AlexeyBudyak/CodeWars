function countSalutes(hallway) {
  hallway = hallway.split('').filter(el=>el!=='-');
  let n = 0;
  do{
    if(hallway[0] === '>')  n+= hallway.filter(el=> el === '<').length;
    hallway.shift();
  }while(hallway.length);
  return n * 2;
}
