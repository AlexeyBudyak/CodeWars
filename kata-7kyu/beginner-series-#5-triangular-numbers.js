function isTriangular(t) {
  let k = 2;
  let i;
  for(let i = 1; i <= t; i+=k++)
    if(i === t)  return true;
  return false;
}
