function gridIndex(grid, indices) {
  return indices.map(i => [].concat(...grid)[i - 1]).join('');
}
