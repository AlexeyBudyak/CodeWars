function consonantCount(str) {
  return str.replace(/[aeiou\^ $&#0-9_]/g,'').length;
}
