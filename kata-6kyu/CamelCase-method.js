String.prototype.camelCase=function(){
  return this.split(' ').filter(el=>el).map(el=>el[0].toUpperCase() + el.slice(1)).join('');
}
