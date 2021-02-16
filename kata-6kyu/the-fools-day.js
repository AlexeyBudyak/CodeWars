function newsIsFalse(news) {
  let w = 0;
  for(let i = 0; i < news.length; i++)
    if(news[i] === 'abigail'[w]) w++; 
  return w === 7 ? 'YES' : 'NO' 
}

// const newsIsFalse=n=>["NO","YES"][+/a.*b.*i.*g.*a.*i.*l/i.test(n)];
