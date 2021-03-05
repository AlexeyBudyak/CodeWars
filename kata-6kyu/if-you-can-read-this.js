function to_nato(words) {
  const natoABC = ['Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 
                'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 
                'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 
                'Victor', 'Whiskey', 'Xray', 'Yankee', 'Zulu']
  return words.split(' ')
                 .map(w=> w.split('')
                             .map(el=>
                                    '.!?'.includes(el) ? el :
                                    natoABC[el.toUpperCase().charCodeAt(0)-65]
                                 )
                           .join(' '))
              .join(' ');
}
