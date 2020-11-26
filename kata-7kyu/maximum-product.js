function adjacentElementsProduct(array) {
   return Math.max(...array.map((el,i) => i ? el * array[i - 1] : -Infinity));
}
