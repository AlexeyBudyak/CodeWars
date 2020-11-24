function initializeNames(name){
  return name.split(' ').map((el, i, arr) => i && i < arr.length - 1 ? el[0] + '.' : el).join(' ');
}
