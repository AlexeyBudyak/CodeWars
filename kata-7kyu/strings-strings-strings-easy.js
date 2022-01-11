Number.prototype.toString = function(){
  return this + '';
}
Boolean.prototype.toString = function(){
  return this + '';
}
Array.prototype.toString = function(){
  return '[' + this.reduce((str,n, i) => str + n + (i < this.length -1 ? ',' : ''),'') + ']';
}
