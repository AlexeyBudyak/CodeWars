function getMostProfitFromStockQuotes(quotes) {
  if(quotes.length < 2)  return 0;
  const max = Math.max(...quotes);
  const n = quotes.indexOf(max);
  const buying  = quotes.slice(0,n);
  return buying.reduce((a,b)=>a-b,max * buying.length) 
          + getMostProfitFromStockQuotes(quotes.slice(n+1));
}
