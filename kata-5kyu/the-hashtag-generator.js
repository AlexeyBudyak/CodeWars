function generateHashtag (str) {
  str = '#' + str.split(' ').filter(el => el).map(el => el[0].toUpperCase() + el.slice(1)).join('');
  return (str.length === 1 || str.length > 140) ? false : str;
}
