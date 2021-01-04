function nonsense(str) {
  str = str.replace(/0/g,'a')
            .replace(/1/g,'e')
            .replace(/2/g,'i')
            .replace(/3/g,'o')
            .replace(/4/g,'u')
  return    (str[0].toUpperCase() + str.substring(1).toLowerCase())
            .replace(/trex/g,'')
            .replace(/raptor/g,'')
            .replace(/ i /g, ' I ') + ((str[str.length - 1] === '.') ? '' : '.')
}
