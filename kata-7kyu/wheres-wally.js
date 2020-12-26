function wheresWally(string){
  return string.replace('Wally.','Wally ').replace("Wally'",'Wally ')
    .split(' ').map(el=>el === 'Wally' ? '*' : el).join(' ').indexOf('*');
}
