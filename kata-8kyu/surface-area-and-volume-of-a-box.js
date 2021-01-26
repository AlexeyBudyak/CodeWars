function getSize(x, y, z) {
  return [(x * y + y * z + z * x) * 2, x * y * z];
}
