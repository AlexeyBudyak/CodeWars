function vowel2index(str) {
   return str.split('').map((el,i)=>'aeiouAEIOU'.includes(el) ? i + 1 : el).join('');
}
