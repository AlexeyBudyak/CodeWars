String.prototype.toAlternatingCase = function () {
  return this.split('')
             .map(el=> el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase())
             .join('');
}
