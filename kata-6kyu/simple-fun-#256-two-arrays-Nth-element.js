function twoArraysNthElement(array1, array2, n) {
  let i1, i2;
  const check = () => i2 === array2.length || array1[i1] < array2[i2];
  for(i1 = 0, i2 = 0; n > 0; n--)  
    check() ? i1++ : i2++;
  return check() ? array1[i1] : array2[i2];
}
