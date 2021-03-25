function solve(stones) {
  const n = stones.length;
  let size;
  do{
    size = stones.length;
    stones = stones.replace(/RR/g,'R').replace(/GG/g,'G').replace(/BB/g,'B');
  }while(stones.length !== size)
  return n - size;
}
