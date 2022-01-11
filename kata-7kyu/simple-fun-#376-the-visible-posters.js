function countVisible(posters){
  const max = posters.reduce((m,[_, x]) => x > m ? x : m,0);
  let  wall = new Array(max).fill(0);
  for(let i = 0; i < posters.length; i++)
    wall = wall.map((el,j) => j >= posters[i][0] -1 && j < posters[i][1]  ? i + 1 : el);
  return wall.filter((x,i) => x && wall.indexOf(x) === i).length;
}
