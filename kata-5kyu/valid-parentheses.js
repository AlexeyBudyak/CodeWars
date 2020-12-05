function validParentheses(parens){
  let oldSize=parens.length + 1;
  while(oldSize > parens.length){
      oldSize = parens.length;
      parens = parens.replace('()','').replace('[]','').replace('{}','');
    }
  return !parens;
}
