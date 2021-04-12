function caffeineBuzz(n){
  if(!(n%3) && !(n%4))  return 'CoffeeScript';
  if(!(n%3))  return 'Java' + (n%2 ? '' : 'Script');
  return 'mocha_missing!';
}
