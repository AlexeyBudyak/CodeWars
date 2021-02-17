function countWords(str) {
  return str.replace(/[^-'A-Za-z0-9]/g,' ').replace(/[A-Z]/g,' *').split(' ').filter(el=>el).length;
}
