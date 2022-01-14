function cutTheRopes(a) {
  let result = [];
  while(a.length){
    result.push(a.length);
    const shortest = Math.min(...a);
    a = a.map(x => x - shortest).filter(x => x);  
  }
  return result;
}
