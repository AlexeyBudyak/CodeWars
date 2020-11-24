function trim(arr, size) {
  let end = size > arr.length - 3 ? size : size > 3 ? size - 3 : 1;
  return arr.slice(0, end) + ((size < arr.length) ? '...' : '');
}
