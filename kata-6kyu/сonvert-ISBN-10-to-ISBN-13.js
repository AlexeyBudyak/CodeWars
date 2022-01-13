function isbnConverter(isbn) {
  return "978-" + isbn.slice(0,-1) +
    (isbn.slice(0,-2).replace(/[-]/g,'').split('')
         .reduce((sum,d,i)=>sum - (3 - 2 * (i % 2)) * +d,992)) % 10;
}
