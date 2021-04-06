const tourney = array => {
  return array.length === 1 ? [array]
           : array.length % 2 ? 
                [[...array], ...tourney([array[array.length-1], 
                                          ...array.slice(0,array.length/2)
                                         .map((el,i)=>Math.max(array[i*2],array[i*2+1]))])]
              : [[...array],...tourney(array.slice(0,array.length/2)
                                       .map((el,i)=>Math.max(array[i*2],array[i*2+1])))];
}
