function median(array) {
  return array.sort((a,b)=>a-b).slice(Math.ceil(array.length/ 2) - 1, array.length /2 + 1)
              .reduce((a,b,i,arr)=> a + b / arr.length,0);
}
