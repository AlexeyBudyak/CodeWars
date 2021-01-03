function unpackSausages(truck) {
  return truck.join(',')
              .split(',')
              .filter(el => el[0] === '[' && el.length === 6)
              .map(el=>el.substring(1,5))
              .filter(el => el[0] === el[1] && el[1] === el[2] && el[2] === el[3])
              .filter((el,i) => (i + 1) % 5)
              .map(el=>el.split('').join(' '))
              .join(' ');
}
