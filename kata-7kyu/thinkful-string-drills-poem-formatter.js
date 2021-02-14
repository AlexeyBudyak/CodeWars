function formatPoem(poem) {
  poem = poem.split('.return').join('.')
             .split('. ').join('.')
             .split('.').join('.\n');
  return (poem[poem.length - 2] === ".") ? poem.slice(0,poem.length - 1) : poem;
}
