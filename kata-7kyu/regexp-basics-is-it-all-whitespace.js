String.prototype.whitespace=function(){
  return ![...this].some(el=> /[a-z0-9]/.test(el));
}
