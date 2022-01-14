function shuffledArray(shuffled) {
  for(let i = 0; i < shuffled.length; i++){
    const arr = shuffled.filter((_,j) => i !== j);
    if(arr.reduce((sum, x) => sum + x, 0) === shuffled[i])
      return arr.sort((a,b)=> a - b);
  }
}
