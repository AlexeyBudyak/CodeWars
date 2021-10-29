function figureOut(arr) {
  const letters = arr[0].replace(/ /g,"").split('');
  for(let i in letters)
    for(let j = 0; j < arr.length - 1; j++)
      if((arr[j].indexOf(letters[i]) - arr[j + 1].indexOf(letters[i])) ** 2 > 1)
        return letters[i];
  return null;
}
