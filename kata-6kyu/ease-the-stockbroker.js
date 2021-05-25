function balanceStatements(list){
  let buy = 0, sell = 0, badly = [];
  if(list !== '')
  list.split(', ').forEach(stockRaw => {
    const stock = stockRaw.split(' ');
    if(stock.length !== 4 || stock[1].includes('.') || !stock[2].includes('.')) 
      badly.push(stockRaw + ' ;');
    else
      if(stock[3] === 'B')  buy += stock[1] * stock[2];
                      else  sell += stock[1] * stock[2];
  })
  const bf = badly.length ? '; Badly formed ' + badly.length + ': ' + badly.join('') : '';
  return `Buy: ${Math.round(buy)} Sell: ${Math.round(sell)}${bf}`
}
