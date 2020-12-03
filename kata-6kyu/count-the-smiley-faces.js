function countSmileys(arr) {
  const smiles = ':);):-);-):~);~):D;D:-D;-D:~D;~D';
  return arr.filter(el=> smiles.includes(el)).length;
}
