function pillars(num_pill, dist, width) {
  return num_pill < 2 ? 0 : (dist * 100 + width) * (num_pill - 1) - width;
}
