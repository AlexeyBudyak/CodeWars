function jumpTo(x, y, step = 0) {
  return x === y ? step 
                 : jumpTo(x, y - [0.5 * y, 1][+(x * 2 > y || y % 2)], step + 1)
}
