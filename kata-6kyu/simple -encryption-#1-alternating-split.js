function encrypt(text, n) {
  if(n < 1 || text === null)  return text;
   text = text.split('').filter((el,i)=> (i % 2)).join('') +
          text.split('').filter((el,i)=> !(i % 2)).join('')
  return n > 1 ? encrypt(text, n-1) : text;
}

function decrypt(eText, n) {
  if(n < 1 || eText === null)  return eText;
  const e1 = eText.split('').slice(0,eText.length / 2);
  const e2 = eText.split('').slice(eText.length / 2);
  eText = eText.split('').map((el,i) => i % 2 ? e1[(i - 1)/2] : e2[i/2]).join('');
   return n > 1 ? decrypt(eText, n-1) : eText;
}
