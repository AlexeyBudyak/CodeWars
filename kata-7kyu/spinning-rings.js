function spinningRings(innerMax, outerMax) {
  let moves = 0;
  for(let [inner, outer] = [innerMax,1]; inner !== outer; moves++)
    inner = (inner ? inner - 1 : innerMax),
    outer = (outer < outerMax ? outer + 1 : 0);
  return moves + 1;
};
