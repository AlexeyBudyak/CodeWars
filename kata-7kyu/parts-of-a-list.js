function partlist(arr) {
    return Array(arr.length - 1).fill(arr)
      .map((el,i) => [el.slice(0,i + 1 ).join(' '), el.slice(i + 1).join(' ')])
}
