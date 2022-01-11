String.prototype.capitalize = function(){
  let c = this.charCodeAt(0) < 97 ? this[0] : String.fromCharCode(this.charCodeAt(0) - 32);
  return c + this.slice(1);
}
