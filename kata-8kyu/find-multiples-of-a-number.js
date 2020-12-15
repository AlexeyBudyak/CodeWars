function findMultiples(integer, limit) {
  const value = [];
  for(let i = integer; i <= limit; i+= integer)
    value.push(i);
  return value;
}
