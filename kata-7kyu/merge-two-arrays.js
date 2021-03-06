function mergeArrays(a, b) {
  return Array(Math.max(a.length, b.length) * 2).fill(0)
              .map((_,i)=>i % 2 ? b[(i-1)/2] : a[i/2])
              .filter(el=>el);
}
