function grid(N) {
  if(N < 0) return null;
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  let m = [];
  for(let i = 0; i < N; i++){
    let line = [];
    for(let j = 0; j < N; j++)
      line.push(abc[(i + j) % 26]);
    m.push(line.join(' '));
  }
  return m.join('\n');
}
