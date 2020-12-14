function stockList(listOfArt, listOfCat){
  return   !listOfArt.length ? ''
           : listOfCat.map(c => '(' + c + ' : ' +
                       listOfArt.reduce((num,book)=>
                            num+= (book[0] === c) ? +book.split(' ')[1] : 0,0) + ')')
                  .join(' - ');
}
