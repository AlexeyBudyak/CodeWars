function printerError(s) {
    return s.split('').filter(el=>el>'m').length + '/' + s.length;
}
