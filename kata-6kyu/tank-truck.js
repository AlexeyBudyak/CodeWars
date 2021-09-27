function tankvol(h, d, vt) {
  const r = d / 2;
  const a = r - h; 
  const b = (r * r - a * a) ** 0.5;
  const ang = Math.acos(a / r); 
  const aSection = ang * r * r
  const aTriangle = a * b;
  const aFilled = aSection - aTriangle;
  const aFull = Math.PI * r * r;
  const totalVolume = aFilled / aFull * vt;
  return Math.floor(totalVolume);
}
