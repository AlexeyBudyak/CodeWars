function addArrays(array1, array2) {
  console.log(array1,array2);
  const n = +array1.join('') + +array2.join('');
  return !array1.length ? [] : 
            (Math.abs(n) + '').split('').map((el,i) => (!i && n < 0) ? -+el : +el );
}
