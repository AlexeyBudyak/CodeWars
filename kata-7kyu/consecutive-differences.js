function differences(a) {
  return a.length === 1 ? a[0] :
          differences(a.map((el,i) => Math.abs(el - a[i - 1])).slice(1));
}
