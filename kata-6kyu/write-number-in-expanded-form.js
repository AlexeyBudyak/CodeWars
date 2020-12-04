function expandedForm(num) {
  return (num + '').split('').reverse()
                   .map((el,i) => el * (10 ** i))
                   .filter(el=>el)
                   .reverse().join(' + ');
}
