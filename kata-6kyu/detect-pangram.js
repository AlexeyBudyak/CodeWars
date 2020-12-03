function isPangram(string){
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  const letters = abc.split('')
                     .filter(letter => string.toLowerCase().includes(letter))
                     .join('');
  return letters === abc;
}
