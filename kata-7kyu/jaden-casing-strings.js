const capital = str => str[0].toUpperCase() + str.slice(1);

String.prototype.toJadenCase = function ( x ) {
  return this.split(' ').map(el => capital(el)).join(' ');
}
