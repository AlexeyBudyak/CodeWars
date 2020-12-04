function berlinClock(time) {
  const [hr,min,sec] = time.split(':');
  let t = sec % 2 ? 'O\n' : 'Y\n';
  t+= 'R'.repeat(Math.floor(hr / 5)) + 'O'.repeat(4 - Math.floor(hr / 5)) + '\n';
  t+= 'R'.repeat(hr % 5) + 'O'.repeat(4 - hr % 5) + '\n';
  t = t.padEnd(t.length + min/5, 'YYR') + 'O'.repeat(11 - Math.floor(min / 5)) + '\n';
  t+= 'Y'.repeat(min % 5) + 'O'.repeat(4 - min % 5);
  return t;
}
