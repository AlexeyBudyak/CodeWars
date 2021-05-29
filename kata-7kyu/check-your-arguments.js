function objectType(obj) { //if no arguments are passed, defaults to null
  if(!arguments.length) obj = null;
  return Object.prototype.toString.call(obj);
}
