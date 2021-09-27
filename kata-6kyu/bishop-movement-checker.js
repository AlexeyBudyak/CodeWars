const bishop = (p1, p2, n) => {
  if(p1 == p2)  return true;
  if(n === 1 && Math.abs(p1.charCodeAt(0) - p2.charCodeAt(0)) === Math.abs(+p1[1] - +p2[1]))
    return true;
  return n > 1 && (p1.charCodeAt(0) + +p1[1]) % 2  == (p2.charCodeAt(0) + +p2[1]) % 2;
}
