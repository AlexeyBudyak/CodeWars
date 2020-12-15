function allNonConsecutive (arr) {
   return arr.map((el,i)=> (i && arr[i -1] + 1 !== el)
                  ? { i: i, n: el } : '').filter(el=>el);
}
