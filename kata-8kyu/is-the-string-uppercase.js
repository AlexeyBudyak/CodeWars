String.prototype.isUpperCase = function() {
  return this.split('').join('') === this.toUpperCase();
}
