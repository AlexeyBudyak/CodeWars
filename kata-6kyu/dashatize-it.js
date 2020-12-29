function dashatize(num) {
  return (Math.abs(num) + '').split('')
        .map((el, i, arr) => 
             ( el % 2) ? ( (i ? '-' : '' ) + el + (i < arr.length - 1 ? '-' : '')) : el)
        .join('').replace(/--/g,'-');
}
