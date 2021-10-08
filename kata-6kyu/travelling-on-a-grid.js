function countSpots(x1, y1, x2, y2){
  let counts = 0;
  if(x2 > x1) counts+= countSpots(x1 + 1, y1, x2, y2);
  if(y2 > y1) counts+= countSpots(x1, y1 + 1, x2, y2);
  if((x2 > x1) && (y2 > y1))  counts++;
  return counts;
}

function travelChessboard(s){
  const [x1, y1, x2, y2] = s.slice(1,-1).replace(')(', ' ').split(' ').map(el => +el);
  return 1+ countSpots(x1,y1,x2,y2)
}
