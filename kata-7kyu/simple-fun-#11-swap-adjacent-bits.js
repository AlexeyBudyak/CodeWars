function swapAdjacentBits(n) {
  let bin = n.toString(2)
  let newBin = '';
  if(bin.length % 2)  bin = '0' + bin;
  for(let i = 0; i < bin.length; i+=2)
    newBin+= bin[i+1] + bin[i]
  return parseInt(newBin, 2);
}
