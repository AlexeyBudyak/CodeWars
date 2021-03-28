function fortune(f0, p, c0, n, i) {
    for(let j = 1; j < n; j++ ){
      f0 = ~~(f0 * (1 + p / 100) - c0);
      c0 = ~~(c0 * (1 + i / 100));
    }
  return f0 >= 0;
}
