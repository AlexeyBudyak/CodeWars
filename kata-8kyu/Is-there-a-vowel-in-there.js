function isVow(a){
  return a.map(el=>'aeiou'.includes(String.fromCharCode(el)) ? String.fromCharCode(el) : el );
}
