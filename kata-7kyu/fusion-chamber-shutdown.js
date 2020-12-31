function burner(c, h, o) {
  const water = Math.min(~~(h/2),o);
  const co2 = Math.min(c, ~~((o - water)/2));
  const methane = Math.min(c - co2, ~~((h - water * 2)/4))
  return [water, co2, methane];
}
