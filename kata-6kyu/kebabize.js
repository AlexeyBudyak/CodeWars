function kebabize(str) {
  str = str.replace(/[0-9]/g,'').replace(/[A-Z]/g, x => '-' + x.toLowerCase());
  return str[0] === '-' ? str.slice(1) : str;
}
