function swap(n1, n2, arr){
  if( n1 >= 0 && n2 < arr.length)  
    [arr[n1],arr[n2]] = [arr[n2],arr[n1]];
  return arr;
}
function moveName(name, n, arr) {
   if(!n)  return arr;
   let i = arr.indexOf(name);
   if(n < 0)  arr = swap(i,i+1, arr),n++;
         else arr = swap(i-1,i, arr),n--;
   return moveName(name, n, arr);
}
function leaderboardSort(list, changes) {
  console.log(list);
  let chg = [0,1].map(i => changes.map(el => el.split(' ')[i]));
  chg[0].forEach((el,i) => list = moveName(el, +chg[1][i], list));
  return list;
}
