function isValidWalk(walk) {
  const add = {n: 1, s: -1, w: 100, e: -100};
  return (!walk.reduce((total, x) => total+= add[x] ,0) && walk.length === 10);
}
