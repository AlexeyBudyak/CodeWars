function change(string){
  return  'abcdefghijklmnopqrstuvwxyz'.split('')
                                      .map(c => +string.toLowerCase().includes(c))
                                      .join('');
}
