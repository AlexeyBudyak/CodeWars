function nthSmallest(arr, n) {
  const min = Array.from(new Set(arr)).sort((a,b)=>a-b)[n-1]
  return min === undefined ? null : min;
}
