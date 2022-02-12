Object.defineProperty( String.prototype, "eqAll", { value: function eqAll() {
  const arr = [...this];
  return arr.length == 0 || arr.every(el => el == arr[0]);
} } );

Object.defineProperty( Array.prototype, "eqAll", { value: function eqAll() {
  const arr = [...this];
  return arr.length == 0 || arr.every(el => el === arr[0]);
} } );
