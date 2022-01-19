function remove (string) {
  return string.split(' ')
               .filter(el => el.indexOf('!') !== el.lastIndexOf('!') || !el.includes('!'))
               .join(' ');
}
