multiplicationTable = function(size) {
  let table = [];
  let row = [];
  for(let i = 1; i <= size; i++){
    row = [];
    for(let j = 1; j <= size; j++)
      row.push(i * j);
    table.push(row);   
  }
  return table;
}
