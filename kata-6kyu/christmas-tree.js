function christmasTree(height) {
  let tree = '';
  for(let i = 0; i<height; i++)
    tree+=  ' '.repeat(height - i - 1) +
            '*'.repeat(i * 2 + 1) +
            ' '.repeat(height - i - 1) +
            ((i === height - 1) ? '' : '\n');
  return tree;
}
