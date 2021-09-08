function growingPlant(up, down, h) {
  let i = 0;
  while((up - down) * i + up < h) i++;
  return i + 1;
}
