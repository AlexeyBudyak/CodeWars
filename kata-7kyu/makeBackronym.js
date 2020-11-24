var makeBackronym = function(string){
  return string.toUpperCase().split('').map(el => dict[el]).join(' ');
}
