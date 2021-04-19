function getGridNumber(width, height, x, y) {
  return (y - 1) * width + x;
}

function getXYPosition(width, height, number) {
  return {
    x: !(number % width) ? width : number % width,
    y: ~~(number / width) + 1 - +!(number % width)
  };
}
