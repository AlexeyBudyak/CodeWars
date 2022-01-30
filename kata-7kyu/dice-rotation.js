function rotations(dieArray){
  let sets = [[0, 1, 1, 1, 1, 2],
  [1, 0, 1, 1, 2, 1],
  [1, 1, 0, 2, 1, 1],
  [1, 1, 2, 0, 1, 1],
  [1, 2, 1, 1, 0, 1],
  [2, 1, 1, 1, 1, 0]];
  let min = Infinity;
  for(let i = 0; i < 6; i++)
    min= Math.min(min, dieArray.reduce((sum,x) => sum + sets[i][x - 1] ,0));
  return min;
}
