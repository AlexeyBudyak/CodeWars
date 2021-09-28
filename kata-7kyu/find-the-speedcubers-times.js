function cubeTimes(times) {
  times = times.sort((a, b) => b - a);
  return [Math.round(times.slice(1,-1).reduce((sum, x) => sum + x, 0) * 100 / 3) / 100, times[times.length-1]];
}
