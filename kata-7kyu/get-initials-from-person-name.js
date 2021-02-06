function toInitials(name) {
  return name.split(' ').map(el=>el[0] + '.').join(' ');
}
