function collision(x1, y1, r1, x2, y2, r2) {
  return (r1 + r2) ** 2 > (x2 - x1) ** 2 + (y2 - y1) ** 2;
}
