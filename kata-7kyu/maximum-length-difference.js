function mxdiflg(a1, a2) {
    return (!a1.length || !a2.length) ? -1 
         : Math.max(
              Math.max(...a2.map(el => el.length)) - Math.min(...a1.map(el => el.length)),
              Math.max(...a1.map(el => el.length)) - Math.min(...a2.map(el => el.length))
                   );
}
