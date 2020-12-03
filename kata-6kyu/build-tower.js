function towerBuilder(nFloors) {
  const tower = [];
  let i = 0;
  while(tower.length < nFloors)
    tower.push(' '.repeat(nFloors - 1 - i) 
             + '*'.repeat(2 * i + 1) 
             + ' '.repeat(nFloors - 1 - i++));
  return tower;
}
