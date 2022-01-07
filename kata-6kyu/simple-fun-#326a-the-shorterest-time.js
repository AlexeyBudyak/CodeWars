function shorterestTime(n,m,speeds) {
  const walk = n * speeds[3];
  const elevator = (Math.abs(n - m) + n) * speeds[0] + 2 * speeds[1] + speeds[2];
  const combo = Math.abs(n - m) * speeds[3] + m * speeds[0] + 2 * speeds[1] + speeds[2];
  return Math.min(walk, elevator, combo)
}
