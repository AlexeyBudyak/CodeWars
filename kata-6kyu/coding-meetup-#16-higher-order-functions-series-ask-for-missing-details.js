function askForMissingDetails(list) {
  const details = ['firstName', 'lastName', 'country', 'continent', 'age', 'language'];
  return list.filter(person => details.some(props => person[props] === null))
             .map(el =>{ 
                 return  {...el, question: `Hi, could you please provide your ${details
                                              .filter(props => el[props] === null)[0]}.`}
             });
}
