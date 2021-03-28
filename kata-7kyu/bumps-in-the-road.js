function bump(x){
  return x.replace(/[^n]/g,'').length > 15 ? 'Car Dead' : 'Woohoo!';
}
