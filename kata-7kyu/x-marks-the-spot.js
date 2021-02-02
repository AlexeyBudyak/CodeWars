const xMarksTheSpot = (input) => {
  input = input.map(el=>el.join(''));
  if (input.filter(el=>el.includes('x')).length !== 1 )  return [];
  const row = input.map(el=>el.includes('x') ? 'x' : ' ').join('').indexOf('x');
  return [row, input[row].indexOf('x')];
}
