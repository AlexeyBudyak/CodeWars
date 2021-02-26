function balance(book) {
  book = book.replace(/[!=:;{}?,]/g,'')
             .split('\n')
             .filter(el=>el)
             .map((el,i)=>!i ? el : el.split(' ')); 
  const body = ['Original Balance: ' + (+book[0]).toFixed(2)];
  const originalBalance = book[0];
  let balance = book[0];
  for(let i = 1; i < book.length; i++){
    balance = (balance - book[i][2]).toFixed(2);
    body.push(book[i].map((el,i)=> i<2 ? el : (+el).toFixed(2)).join(' ') + ' Balance '+ balance);
  }
  const expense = (originalBalance - balance).toFixed(2);
  body.push('Total expense  ' + expense);
  body.push('Average expense  ' + (expense / (book.length-1)).toFixed(2));
  return body.join('\r\n')
}
