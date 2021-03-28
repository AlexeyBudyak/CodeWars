function cypher(string) {
  const str1 = 'OIREASGTBg';
  const str2 = 'olzeasbtBg';
  return string.split('').map(el=> str1.includes(el) ? str1.indexOf(el) 
                                 : str2.includes(el) ? str2.indexOf(el) : el).join('');
}
