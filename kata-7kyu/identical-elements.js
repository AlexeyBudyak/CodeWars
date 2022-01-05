function duplicateElements(m, n) {
   return [...new Set(m)].length + [...new Set(n)].length !== [...new Set([...n,...m])].length;
}
