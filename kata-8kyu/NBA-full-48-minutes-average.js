function pointsPer48(ppg, mpg) {
  return Math.round(ppg * 480 / mpg) / 10 || 0;
}
