const makePlural = (options, number) => {
  if(number % 10 === 1 && number !== 11)  return options[0]
  if(number % 10 < 5 && number % 10 && ~~(number/10) !== 1 )  return options[1];
  return options[2]
}
